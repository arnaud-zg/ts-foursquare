#!/bin/bash

ask_confirm () {
  while true; do
      read -p "Do you want clean tracking branches without remote? " yn
      case $yn in
          [Yy]* )
              sleep 5
              git fetch -p
              for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
            break;;
          [Nn]* )
            exit;;
          * ) echo "Please answer yes or no.";;
      esac
  done
}

do_clean_local_branch () {
  echo "[Git/branch]: Cleaning local git branches"
  ask_confirm
}

do_clean_local_branch

