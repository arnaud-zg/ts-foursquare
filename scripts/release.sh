#!/bin/bash

has_repository_change () {
  if [ git diff-index --quiet HEAD -- ]
  then
      return 1
  else
      return 0
  fi
}

ask_confirm_and_release () {
  while true; do
      read -p "Do you want to make a new release? " yn
      case $yn in
          [Yy]* )
              sleep 5
              git checkout develop
              git pull origin develop
              yarn
              git checkout release
              git pull origin release
              git merge develop
              npm run release
              git add --all
              git checkout master
              git pull origin master
              git merge release
              git checkout develop
              git pull origin develop
              git merge release
              git push origin release
              git push origin develop
              git push origin --follow-tags master
            break;;
          [Nn]* )
            exit;;
          * ) echo "Please answer yes or no.";;
      esac
  done
}

do_release () {
  echo "Let's make a release !"

  if [ !has_repository_change ]
  then
    ask_confirm_and_release
  fi
}

do_release
