# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.11](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.9...v0.2.11) (2019-09-11)

### ⚠️ Tests

- **adapter:** update unit test for get venues search action ([#171](https://github.com/arnaud-zg/ts-foursquare/issues/171)) ([7d85004](https://github.com/arnaud-zg/ts-foursquare/commit/7d85004))
- **util:** update test on mockingFetch and testEpic ([#165](https://github.com/arnaud-zg/ts-foursquare/issues/165)) ([cabd0c9](https://github.com/arnaud-zg/ts-foursquare/commit/cabd0c9))

### 🔧 Chore

- **deps:** update dependency @types/node to v12.7.5 ([#169](https://github.com/arnaud-zg/ts-foursquare/issues/169)) ([06fc4bd](https://github.com/arnaud-zg/ts-foursquare/commit/06fc4bd))
- **deps:** update dependency typescript to v3.6.3 ([#168](https://github.com/arnaud-zg/ts-foursquare/issues/168)) ([7df2778](https://github.com/arnaud-zg/ts-foursquare/commit/7df2778))
- **import:** reorder import ([#172](https://github.com/arnaud-zg/ts-foursquare/issues/172)) ([bc979de](https://github.com/arnaud-zg/ts-foursquare/commit/bc979de))
- **release:** 0.2.10 ([30c948a](https://github.com/arnaud-zg/ts-foursquare/commit/30c948a))
- **type:** rename files for state typing ([#174](https://github.com/arnaud-zg/ts-foursquare/issues/174)) ([f1e26f7](https://github.com/arnaud-zg/ts-foursquare/commit/f1e26f7))
- **type:** rename NRoot into NStore ([#173](https://github.com/arnaud-zg/ts-foursquare/issues/173)) ([55b411e](https://github.com/arnaud-zg/ts-foursquare/commit/55b411e))
- **type:** reorder and clean type for payload, venue and recommended places ([#167](https://github.com/arnaud-zg/ts-foursquare/issues/167)) ([097e01f](https://github.com/arnaud-zg/ts-foursquare/commit/097e01f))

### 🖋 Features

- **venue-explore:** add an action for get venue explore ([#166](https://github.com/arnaud-zg/ts-foursquare/issues/166)) ([1471cd7](https://github.com/arnaud-zg/ts-foursquare/commit/1471cd7))
- **venue-explore:** add an adapter for venue explore ([#170](https://github.com/arnaud-zg/ts-foursquare/issues/170)) ([8b784e4](https://github.com/arnaud-zg/ts-foursquare/commit/8b784e4))

### [0.2.10](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.5...v0.2.10) (2019-09-11)

### ⚠️ Tests

- **coverage:** report code coverage on ci to codecov ([#150](https://github.com/arnaud-zg/ts-foursquare/issues/150)) ([dd05c96](https://github.com/arnaud-zg/ts-foursquare/commit/dd05c96))
- **reducers:** add snapshot of configureStore method ([#163](https://github.com/arnaud-zg/ts-foursquare/issues/163)) ([b087de2](https://github.com/arnaud-zg/ts-foursquare/commit/b087de2))
- **url:** add unit test on getLocationSearch method ([#164](https://github.com/arnaud-zg/ts-foursquare/issues/164)) ([72e0e61](https://github.com/arnaud-zg/ts-foursquare/commit/72e0e61))
- **util:** update test on mockingFetch and testEpic ([#165](https://github.com/arnaud-zg/ts-foursquare/issues/165)) ([cabd0c9](https://github.com/arnaud-zg/ts-foursquare/commit/cabd0c9))

### 🐛 Bug Fixes

- **action:** add root action type ([#141](https://github.com/arnaud-zg/ts-foursquare/issues/141)) ([0268592](https://github.com/arnaud-zg/ts-foursquare/commit/0268592))
- **action:** remove old get venues search action ([#145](https://github.com/arnaud-zg/ts-foursquare/issues/145)) ([29b7269](https://github.com/arnaud-zg/ts-foursquare/commit/29b7269))
- **deps:** update dependency rxjs to v6.5.3 ([#138](https://github.com/arnaud-zg/ts-foursquare/issues/138)) ([566cdc8](https://github.com/arnaud-zg/ts-foursquare/commit/566cdc8))
- **selector:** get life state on method lifeSelector ([#148](https://github.com/arnaud-zg/ts-foursquare/issues/148)) ([0c45fcc](https://github.com/arnaud-zg/ts-foursquare/commit/0c45fcc))
- **selector:** get life state on method lifeStatusSelector ([#149](https://github.com/arnaud-zg/ts-foursquare/issues/149)) ([cc259a1](https://github.com/arnaud-zg/ts-foursquare/commit/cc259a1))
- **status:** define status type ([#139](https://github.com/arnaud-zg/ts-foursquare/issues/139)) ([511bf7f](https://github.com/arnaud-zg/ts-foursquare/commit/511bf7f))
- **type:** update request type definition file ([#152](https://github.com/arnaud-zg/ts-foursquare/issues/152)) ([5799b52](https://github.com/arnaud-zg/ts-foursquare/commit/5799b52))
- **url:** handle url search parameter with undefined value ([#153](https://github.com/arnaud-zg/ts-foursquare/issues/153)) ([24b9be9](https://github.com/arnaud-zg/ts-foursquare/commit/24b9be9))

### 🔧 Chore

- **deps:** update dependency @types/node to v12.7.4 ([#137](https://github.com/arnaud-zg/ts-foursquare/issues/137)) ([f1571ad](https://github.com/arnaud-zg/ts-foursquare/commit/f1571ad))
- **deps:** update dependency @types/node to v12.7.5 ([#169](https://github.com/arnaud-zg/ts-foursquare/issues/169)) ([06fc4bd](https://github.com/arnaud-zg/ts-foursquare/commit/06fc4bd))
- **deps:** update dependency tsdx to v0.9.1 ([#136](https://github.com/arnaud-zg/ts-foursquare/issues/136)) ([f00976c](https://github.com/arnaud-zg/ts-foursquare/commit/f00976c))
- **deps:** update dependency tsdx to v0.9.2 ([#161](https://github.com/arnaud-zg/ts-foursquare/issues/161)) ([37d4dde](https://github.com/arnaud-zg/ts-foursquare/commit/37d4dde))
- **deps:** update dependency typescript to v3.6.3 ([#168](https://github.com/arnaud-zg/ts-foursquare/issues/168)) ([7df2778](https://github.com/arnaud-zg/ts-foursquare/commit/7df2778))
- **release:** 0.2.6 ([069b0f4](https://github.com/arnaud-zg/ts-foursquare/commit/069b0f4))
- **release:** 0.2.7 ([7f3ba59](https://github.com/arnaud-zg/ts-foursquare/commit/7f3ba59))
- **release:** 0.2.8 ([4fec65b](https://github.com/arnaud-zg/ts-foursquare/commit/4fec65b))
- **release:** 0.2.9 ([0b5f55e](https://github.com/arnaud-zg/ts-foursquare/commit/0b5f55e))
- **type:** reorder and clean type for payload, venue and recommended places ([#167](https://github.com/arnaud-zg/ts-foursquare/issues/167)) ([097e01f](https://github.com/arnaud-zg/ts-foursquare/commit/097e01f))

### 🖋 Features

- **async:** handle async action on status module ([#151](https://github.com/arnaud-zg/ts-foursquare/issues/151)) ([a42e32b](https://github.com/arnaud-zg/ts-foursquare/commit/a42e32b))
- **status:** add reducer for status module ([#142](https://github.com/arnaud-zg/ts-foursquare/issues/142)) ([6dd8a4a](https://github.com/arnaud-zg/ts-foursquare/commit/6dd8a4a))
- **status:** add selector for status module ([#143](https://github.com/arnaud-zg/ts-foursquare/issues/143)) ([43228e4](https://github.com/arnaud-zg/ts-foursquare/commit/43228e4))
- **venue-explore:** add an action for get venue explore ([#166](https://github.com/arnaud-zg/ts-foursquare/issues/166)) ([1471cd7](https://github.com/arnaud-zg/ts-foursquare/commit/1471cd7))
- **venues:** call get venues search with custom variable ([#162](https://github.com/arnaud-zg/ts-foursquare/issues/162)) ([146621c](https://github.com/arnaud-zg/ts-foursquare/commit/146621c))

### [0.2.9](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.8...v0.2.9) (2019-09-09)

### ⚠️ Tests

- **reducers:** add snapshot of configureStore method ([#163](https://github.com/arnaud-zg/ts-foursquare/issues/163)) ([b087de2](https://github.com/arnaud-zg/ts-foursquare/commit/b087de2))
- **url:** add unit test on getLocationSearch method ([#164](https://github.com/arnaud-zg/ts-foursquare/issues/164)) ([72e0e61](https://github.com/arnaud-zg/ts-foursquare/commit/72e0e61))

### 🐛 Bug Fixes

- **url:** handle url search parameter with undefined value ([#153](https://github.com/arnaud-zg/ts-foursquare/issues/153)) ([24b9be9](https://github.com/arnaud-zg/ts-foursquare/commit/24b9be9))

### 🔧 Chore

- **deps:** update dependency tsdx to v0.9.2 ([#161](https://github.com/arnaud-zg/ts-foursquare/issues/161)) ([37d4dde](https://github.com/arnaud-zg/ts-foursquare/commit/37d4dde))

### 🖋 Features

- **venues:** call get venues search with custom variable ([#162](https://github.com/arnaud-zg/ts-foursquare/issues/162)) ([146621c](https://github.com/arnaud-zg/ts-foursquare/commit/146621c))

### [0.2.8](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.7...v0.2.8) (2019-09-08)

### 🐛 Bug Fixes

- **type:** update request type definition file ([#152](https://github.com/arnaud-zg/ts-foursquare/issues/152)) ([5799b52](https://github.com/arnaud-zg/ts-foursquare/commit/5799b52))

### [0.2.7](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.6...v0.2.7) (2019-09-05)

### ⚠️ Tests

- **coverage:** report code coverage on ci to codecov ([#150](https://github.com/arnaud-zg/ts-foursquare/issues/150)) ([dd05c96](https://github.com/arnaud-zg/ts-foursquare/commit/dd05c96))

### 🐛 Bug Fixes

- **action:** remove old get venues search action ([#145](https://github.com/arnaud-zg/ts-foursquare/issues/145)) ([29b7269](https://github.com/arnaud-zg/ts-foursquare/commit/29b7269))
- **selector:** get life state on method lifeSelector ([#148](https://github.com/arnaud-zg/ts-foursquare/issues/148)) ([0c45fcc](https://github.com/arnaud-zg/ts-foursquare/commit/0c45fcc))
- **selector:** get life state on method lifeStatusSelector ([#149](https://github.com/arnaud-zg/ts-foursquare/issues/149)) ([cc259a1](https://github.com/arnaud-zg/ts-foursquare/commit/cc259a1))

### 🖋 Features

- **async:** handle async action on status module ([#151](https://github.com/arnaud-zg/ts-foursquare/issues/151)) ([a42e32b](https://github.com/arnaud-zg/ts-foursquare/commit/a42e32b))

### [0.2.6](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.5...v0.2.6) (2019-09-03)

### 🐛 Bug Fixes

- **action:** add root action type ([#141](https://github.com/arnaud-zg/ts-foursquare/issues/141)) ([0268592](https://github.com/arnaud-zg/ts-foursquare/commit/0268592))
- **deps:** update dependency rxjs to v6.5.3 ([#138](https://github.com/arnaud-zg/ts-foursquare/issues/138)) ([566cdc8](https://github.com/arnaud-zg/ts-foursquare/commit/566cdc8))
- **status:** define status type ([#139](https://github.com/arnaud-zg/ts-foursquare/issues/139)) ([511bf7f](https://github.com/arnaud-zg/ts-foursquare/commit/511bf7f))

### 🔧 Chore

- **deps:** update dependency @types/node to v12.7.4 ([#137](https://github.com/arnaud-zg/ts-foursquare/issues/137)) ([f1571ad](https://github.com/arnaud-zg/ts-foursquare/commit/f1571ad))
- **deps:** update dependency tsdx to v0.9.1 ([#136](https://github.com/arnaud-zg/ts-foursquare/issues/136)) ([f00976c](https://github.com/arnaud-zg/ts-foursquare/commit/f00976c))

### 🖋 Features

- **status:** add reducer for status module ([#142](https://github.com/arnaud-zg/ts-foursquare/issues/142)) ([6dd8a4a](https://github.com/arnaud-zg/ts-foursquare/commit/6dd8a4a))
- **status:** add selector for status module ([#143](https://github.com/arnaud-zg/ts-foursquare/issues/143)) ([43228e4](https://github.com/arnaud-zg/ts-foursquare/commit/43228e4))

### [0.2.5](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.4...v0.2.5) (2019-09-02)

### 🐛 Bug Fixes

- **deps:** update dependency http-response-status to v0.0.4 ([#128](https://github.com/arnaud-zg/ts-foursquare/issues/128)) ([df99694](https://github.com/arnaud-zg/ts-foursquare/commit/df99694))
- **package:** add github link in npm.com's sidepanel ([#131](https://github.com/arnaud-zg/ts-foursquare/issues/131)) ([d58645a](https://github.com/arnaud-zg/ts-foursquare/commit/d58645a))
- **package:** add keywords in npm.com's sidepanel ([#130](https://github.com/arnaud-zg/ts-foursquare/issues/130)) ([a82367d](https://github.com/arnaud-zg/ts-foursquare/commit/a82367d))
- **venues:** create async action for venues epic ([#132](https://github.com/arnaud-zg/ts-foursquare/issues/132)) ([e3934ca](https://github.com/arnaud-zg/ts-foursquare/commit/e3934ca))

### 🔧 Chore

- **action:** remove old venues actions ([#135](https://github.com/arnaud-zg/ts-foursquare/issues/135)) ([956be06](https://github.com/arnaud-zg/ts-foursquare/commit/956be06))
- **deps:** update dependency husky to v3.0.5 ([#129](https://github.com/arnaud-zg/ts-foursquare/issues/129)) ([7f79e55](https://github.com/arnaud-zg/ts-foursquare/commit/7f79e55))

### 🖋 Features

- **async-action-reducer:** handle async action and detect return type of each reducer ([#133](https://github.com/arnaud-zg/ts-foursquare/issues/133)) ([b6c09cd](https://github.com/arnaud-zg/ts-foursquare/commit/b6c09cd))
- **venues:** handle error case on venues epic ([#134](https://github.com/arnaud-zg/ts-foursquare/issues/134)) ([cf68ed3](https://github.com/arnaud-zg/ts-foursquare/commit/cf68ed3))

### [0.2.4](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.3...v0.2.4) (2019-08-30)

### ⚠️ Tests

- **life:** add life and credentials selector ([#123](https://github.com/arnaud-zg/ts-foursquare/issues/123)) ([9baef55](https://github.com/arnaud-zg/ts-foursquare/commit/9baef55))

### 🐛 Bug Fixes

- **life:** remove useless get life action ([#124](https://github.com/arnaud-zg/ts-foursquare/issues/124)) ([5da5687](https://github.com/arnaud-zg/ts-foursquare/commit/5da5687))
- **life:** rename life into status ([#125](https://github.com/arnaud-zg/ts-foursquare/issues/125)) ([0cce334](https://github.com/arnaud-zg/ts-foursquare/commit/0cce334))
- **life:** rename put credentials action ([#127](https://github.com/arnaud-zg/ts-foursquare/issues/127)) ([29bf67c](https://github.com/arnaud-zg/ts-foursquare/commit/29bf67c))
- **life:** set status to true once put credentials is called ([#126](https://github.com/arnaud-zg/ts-foursquare/issues/126)) ([25961cd](https://github.com/arnaud-zg/ts-foursquare/commit/25961cd))

### [0.2.3](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.2...v0.2.3) (2019-08-30)

### 🐛 Bug Fixes

- **deps:** update dependency http-response-status to v0.0.3 ([#118](https://github.com/arnaud-zg/ts-foursquare/issues/118)) ([d37a393](https://github.com/arnaud-zg/ts-foursquare/commit/d37a393))

### 🔧 Chore

- **deps:** update dependency @types/node to v12.7.3 ([#117](https://github.com/arnaud-zg/ts-foursquare/issues/117)) ([5b9582e](https://github.com/arnaud-zg/ts-foursquare/commit/5b9582e))
- **deps:** update dependency typescript to v3.6.2 ([#112](https://github.com/arnaud-zg/ts-foursquare/issues/112)) ([5ae423d](https://github.com/arnaud-zg/ts-foursquare/commit/5ae423d))
- **template:** add template for issues and pull requests ([#113](https://github.com/arnaud-zg/ts-foursquare/issues/113)) ([b2fbd15](https://github.com/arnaud-zg/ts-foursquare/commit/b2fbd15))
- **test:** add unit test for services ([#114](https://github.com/arnaud-zg/ts-foursquare/issues/114)) ([4c42a5b](https://github.com/arnaud-zg/ts-foursquare/commit/4c42a5b))
- **test:** normalize jest's test name ([#115](https://github.com/arnaud-zg/ts-foursquare/issues/115)) ([7792fee](https://github.com/arnaud-zg/ts-foursquare/commit/7792fee))
- **type:** rename TAction into TRootAction ([#116](https://github.com/arnaud-zg/ts-foursquare/issues/116)) ([cd6a0a0](https://github.com/arnaud-zg/ts-foursquare/commit/cd6a0a0))

### [0.2.2](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.1...v0.2.2) (2019-08-27)

### 🔧 Chore

- **deps:** bump mixin-deep from 1.3.1 to 1.3.2 ([#109](https://github.com/arnaud-zg/ts-foursquare/issues/109)) ([9e112ed](https://github.com/arnaud-zg/ts-foursquare/commit/9e112ed))
- **deps:** move redux-devtools-extension into dependencies ([#111](https://github.com/arnaud-zg/ts-foursquare/issues/111)) ([c6b0778](https://github.com/arnaud-zg/ts-foursquare/commit/c6b0778))
- **rxjs:** import helpers from rxjs internal ([#110](https://github.com/arnaud-zg/ts-foursquare/issues/110)) ([aeb2b52](https://github.com/arnaud-zg/ts-foursquare/commit/aeb2b52))

### [0.2.1](https://github.com/arnaud-zg/ts-foursquare/compare/v0.2.0...v0.2.1) (2019-08-27)

### ⚠️ Tests

- **actions:** add unit test for actions ([#103](https://github.com/arnaud-zg/ts-foursquare/issues/103)) ([c3833e0](https://github.com/arnaud-zg/ts-foursquare/commit/c3833e0))
- **constants:** add snapshot on constants ([#104](https://github.com/arnaud-zg/ts-foursquare/issues/104)) ([8da01bd](https://github.com/arnaud-zg/ts-foursquare/commit/8da01bd))
- **utils:** add unit test for utils ([#102](https://github.com/arnaud-zg/ts-foursquare/issues/102)) ([e877477](https://github.com/arnaud-zg/ts-foursquare/commit/e877477))

### 🔧 Chore

- **deps:** bump eslint-utils from 1.4.0 to 1.4.2 ([#105](https://github.com/arnaud-zg/ts-foursquare/issues/105)) ([7487064](https://github.com/arnaud-zg/ts-foursquare/commit/7487064))
- **deps:** update dependency tsdx to v0.9.0 ([#106](https://github.com/arnaud-zg/ts-foursquare/issues/106)) ([3bf18c5](https://github.com/arnaud-zg/ts-foursquare/commit/3bf18c5))
- **test:** add unit test for reducers ([#108](https://github.com/arnaud-zg/ts-foursquare/issues/108)) ([1854525](https://github.com/arnaud-zg/ts-foursquare/commit/1854525))

### 🖋 Features

- **dev-tools:** Support redux devtools extension ([#107](https://github.com/arnaud-zg/ts-foursquare/issues/107)) ([788f43e](https://github.com/arnaud-zg/ts-foursquare/commit/788f43e))

## [0.2.0](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.10...v0.2.0) (2019-08-25)

### 🔧 Chore

- **release:** add release script ([#99](https://github.com/arnaud-zg/ts-foursquare/issues/99)) ([53f59b8](https://github.com/arnaud-zg/ts-foursquare/commit/53f59b8))
- **type:** add type for state ([#98](https://github.com/arnaud-zg/ts-foursquare/issues/98)) ([26474a9](https://github.com/arnaud-zg/ts-foursquare/commit/26474a9))

### [0.1.10](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.9...v0.1.10) (2019-08-24)

### 🐛 Bug Fixes

- **venues-reducer:** add venues into entities ([#97](https://github.com/arnaud-zg/ts-foursquare/issues/97)) ([6e32d50](https://github.com/arnaud-zg/ts-foursquare/commit/6e32d50))

### [0.1.9](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.8...v0.1.9) (2019-08-24)

### 🐛 Bug Fixes

- **venues-search:** set intent default value to checkin ([#96](https://github.com/arnaud-zg/ts-foursquare/issues/96)) ([ce20bc6](https://github.com/arnaud-zg/ts-foursquare/commit/ce20bc6))

### [0.1.8](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.7...v0.1.8) (2019-08-24)

### 🐛 Bug Fixes

- **venues-search:** use query instead of name on venues search service ([#95](https://github.com/arnaud-zg/ts-foursquare/issues/95)) ([40a6fc0](https://github.com/arnaud-zg/ts-foursquare/commit/40a6fc0))

### 🔧 Chore

- **docs:** add badge on readme ([#92](https://github.com/arnaud-zg/ts-foursquare/issues/92)) ([6bc5981](https://github.com/arnaud-zg/ts-foursquare/commit/6bc5981))

### [0.1.7](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.6...v0.1.7) (2019-08-19)

### 🔧 Chore

- **deps:** update dependency @types/jest to v24.0.18 ([#91](https://github.com/arnaud-zg/ts-foursquare/issues/91)) ([a906259](https://github.com/arnaud-zg/ts-foursquare/commit/a906259))
- **http:** use enum from http-response-status ([#90](https://github.com/arnaud-zg/ts-foursquare/issues/90)) ([5aeed4e](https://github.com/arnaud-zg/ts-foursquare/commit/5aeed4e))

### 🖋 Features

- **store:** add redux store creator with epics ([#89](https://github.com/arnaud-zg/ts-foursquare/issues/89)) ([05967fd](https://github.com/arnaud-zg/ts-foursquare/commit/05967fd))

### [0.1.6](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.5...v0.1.6) (2019-08-17)

### 🐛 Bug Fixes

- **type:** add dependency @types/node ([#59](https://github.com/arnaud-zg/ts-foursquare/issues/59)) ([8718830](https://github.com/arnaud-zg/ts-foursquare/commit/8718830))

### 🔧 Chore

- **config:** add editor rulers ([#60](https://github.com/arnaud-zg/ts-foursquare/issues/60)) ([c1d2aa5](https://github.com/arnaud-zg/ts-foursquare/commit/c1d2aa5))
- **config:** update ide configuration file ([#61](https://github.com/arnaud-zg/ts-foursquare/issues/61)) ([6b8aa41](https://github.com/arnaud-zg/ts-foursquare/commit/6b8aa41))
- **deps:** migration due to tsdx upgrade ([#73](https://github.com/arnaud-zg/ts-foursquare/issues/73)) ([ad2ab7b](https://github.com/arnaud-zg/ts-foursquare/commit/ad2ab7b))
- **deps:** pin dependency @types/node to 12.7.1 ([#62](https://github.com/arnaud-zg/ts-foursquare/issues/62)) ([3ee02c1](https://github.com/arnaud-zg/ts-foursquare/commit/3ee02c1))
- **deps:** update dependency @types/node to v12.7.2 ([#72](https://github.com/arnaud-zg/ts-foursquare/issues/72)) ([5a8e548](https://github.com/arnaud-zg/ts-foursquare/commit/5a8e548))
- **deps:** update dependency husky to v3.0.4 ([#77](https://github.com/arnaud-zg/ts-foursquare/issues/77)) ([b1b3d73](https://github.com/arnaud-zg/ts-foursquare/commit/b1b3d73))
- **deps:** update dependency tsdx to v0.8.0 ([#71](https://github.com/arnaud-zg/ts-foursquare/issues/71)) ([8274cc6](https://github.com/arnaud-zg/ts-foursquare/commit/8274cc6))
- **deps:** update node.js to v10.16.3 ([#76](https://github.com/arnaud-zg/ts-foursquare/issues/76)) ([bef2ff7](https://github.com/arnaud-zg/ts-foursquare/commit/bef2ff7))
- **technical-debt:** add configuration for prettier ([#57](https://github.com/arnaud-zg/ts-foursquare/issues/57)) ([1dda3d1](https://github.com/arnaud-zg/ts-foursquare/commit/1dda3d1))
- **technical-debt:** move typesafe-actioons to dependencies ([#68](https://github.com/arnaud-zg/ts-foursquare/issues/68)) ([053e9e4](https://github.com/arnaud-zg/ts-foursquare/commit/053e9e4))
- **test:** add unit test for venues epics ([#74](https://github.com/arnaud-zg/ts-foursquare/issues/74)) ([462020d](https://github.com/arnaud-zg/ts-foursquare/commit/462020d))
- **test:** update test for venues selector ([#75](https://github.com/arnaud-zg/ts-foursquare/issues/75)) ([d982125](https://github.com/arnaud-zg/ts-foursquare/commit/d982125))
- **version:** add custom configuration file for automating versioning ([#64](https://github.com/arnaud-zg/ts-foursquare/issues/64)) ([4477cba](https://github.com/arnaud-zg/ts-foursquare/commit/4477cba))

### 🖋 Features

- **search:** find a specific place nearby ([#63](https://github.com/arnaud-zg/ts-foursquare/issues/63)) ([2aefc55](https://github.com/arnaud-zg/ts-foursquare/commit/2aefc55))
- **search:** find a venue with latitude and longitude parameters ([#65](https://github.com/arnaud-zg/ts-foursquare/issues/65)) ([f6e7cab](https://github.com/arnaud-zg/ts-foursquare/commit/f6e7cab))
- **storage:** remove store from dependencies ([#66](https://github.com/arnaud-zg/ts-foursquare/issues/66)) ([c769368](https://github.com/arnaud-zg/ts-foursquare/commit/c769368))

### [0.1.5](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.4...v0.1.5) (2019-08-11)

### Bug Fixes

- **deps:** update dependency standard-version to v7 ([#27](https://github.com/arnaud-zg/ts-foursquare/issues/27)) ([3f400b3](https://github.com/arnaud-zg/ts-foursquare/commit/3f400b3))
- **life:** refactor life action and reducer ([#39](https://github.com/arnaud-zg/ts-foursquare/issues/39)) ([3580917](https://github.com/arnaud-zg/ts-foursquare/commit/3580917))
- **life:** refactor venues action and reducer ([#41](https://github.com/arnaud-zg/ts-foursquare/issues/41)) ([a97a978](https://github.com/arnaud-zg/ts-foursquare/commit/a97a978))
- **venues:** refactor venues action, adapter, epic, reducer ([#46](https://github.com/arnaud-zg/ts-foursquare/issues/46)) ([35b2423](https://github.com/arnaud-zg/ts-foursquare/commit/35b2423))
- **venues:** store venues in state with hashmap ([#47](https://github.com/arnaud-zg/ts-foursquare/issues/47)) ([c371588](https://github.com/arnaud-zg/ts-foursquare/commit/c371588))

### Features

- **icon:** add helper for icon [2](<[#37](https://github.com/arnaud-zg/ts-foursquare/issues/37)>) ([1e41b26](https://github.com/arnaud-zg/ts-foursquare/commit/1e41b26))
- **search:** add search for venues action [3](<[#35](https://github.com/arnaud-zg/ts-foursquare/issues/35)>) ([9703115](https://github.com/arnaud-zg/ts-foursquare/commit/9703115))
- **url:** add helper for url manipulation ([#51](https://github.com/arnaud-zg/ts-foursquare/issues/51)) ([599cbb3](https://github.com/arnaud-zg/ts-foursquare/commit/599cbb3))
- **venue-location:** add venue location selector ([#50](https://github.com/arnaud-zg/ts-foursquare/issues/50)) ([7239ed2](https://github.com/arnaud-zg/ts-foursquare/commit/7239ed2))
- **venue-selector:** add venue categories selector ([#49](https://github.com/arnaud-zg/ts-foursquare/issues/49)) ([7c8726f](https://github.com/arnaud-zg/ts-foursquare/commit/7c8726f))

### [0.1.4](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.3...v0.1.4) (2019-07-24)

### Bug Fixes

- **project:** remove dependency on source for folder types/ ([0b2c010](https://github.com/arnaud-zg/ts-foursquare/commit/0b2c010))
- **test:** use relative path for unit test ([81eec98](https://github.com/arnaud-zg/ts-foursquare/commit/81eec98))

### [0.1.3](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.2...v0.1.3) (2019-07-23)

### Bug Fixes

- **package:** use path mapping for actions ([0070cb9](https://github.com/arnaud-zg/ts-foursquare/commit/0070cb9))

### [0.1.2](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.1...v0.1.2) (2019-07-23)

### Bug Fixes

- **package:** add directory src/actions/ to publish in npm ([82c0a1d](https://github.com/arnaud-zg/ts-foursquare/commit/82c0a1d))

### [0.1.1](https://github.com/arnaud-zg/ts-foursquare/compare/v0.1.0...v0.1.1) (2019-07-23)

### Bug Fixes

- **package:** add directory types/ to publish in npm ([55770f9](https://github.com/arnaud-zg/ts-foursquare/commit/55770f9))

## 0.1.0 (2019-07-23)

### Bug Fixes

- **ci:** add codacy coverage ([42a28c2](https://github.com/arnaud-zg/ts-foursquare/commit/42a28c2))
- **ci:** update script for ci process ([0731869](https://github.com/arnaud-zg/ts-foursquare/commit/0731869))
- **config:** add configuration files ([e5ed8ed](https://github.com/arnaud-zg/ts-foursquare/commit/e5ed8ed))
- **config:** add typescript linter ([f330b5d](https://github.com/arnaud-zg/ts-foursquare/commit/f330b5d))
- **project:** add constants, utils and unit test ([31bcea0](https://github.com/arnaud-zg/ts-foursquare/commit/31bcea0))
- **readme:** update title on readme ([45b8760](https://github.com/arnaud-zg/ts-foursquare/commit/45b8760))
- **script:** add release script ([e9adc33](https://github.com/arnaud-zg/ts-foursquare/commit/e9adc33))
- **search:** implement get venues search ([b8e5cc0](https://github.com/arnaud-zg/ts-foursquare/commit/b8e5cc0))

### Features

- **life:** add get life action ([64af353](https://github.com/arnaud-zg/ts-foursquare/commit/64af353))
- **life:** add get life action ([722d38e](https://github.com/arnaud-zg/ts-foursquare/commit/722d38e))
