exports.id = 169;
exports.ids = [169,939,61];
exports.modules = {

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cc": () => (/* binding */ GITHUB_OPTIONS),
/* harmony export */   "$9": () => (/* binding */ DEFAULT_PIPELINE_STATUS),
/* harmony export */   "Km": () => (/* binding */ DEFAULT_PIPELINE_DESCRIPTION),
/* harmony export */   "Hc": () => (/* binding */ PRODUCTION_ENVIRONMENT),
/* harmony export */   "mj": () => (/* binding */ DEFAULT_BRANCH),
/* harmony export */   "_d": () => (/* binding */ CORE_APPROVED_PR_LABEL),
/* harmony export */   "Xt": () => (/* binding */ PEER_APPROVED_PR_LABEL),
/* harmony export */   "Ak": () => (/* binding */ READY_FOR_MERGE_PR_LABEL),
/* harmony export */   "Ee": () => (/* binding */ QUEUED_FOR_MERGE_PREFIX),
/* harmony export */   "IH": () => (/* binding */ FIRST_QUEUED_PR_LABEL),
/* harmony export */   "nJ": () => (/* binding */ JUMP_THE_QUEUE_PR_LABEL),
/* harmony export */   "HW": () => (/* binding */ DEFAULT_PR_TITLE_REGEX)
/* harmony export */ });
/* unused harmony export DEFAULT_EXEMPT_DESCRIPTION */
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// These extra headers are for experimental operations. Newer versions of octokit may not require this
const GITHUB_OPTIONS = {
    headers: {
        accept: 'application/vnd.github.ant-man-preview+json,application/vnd.github.flash-preview+json,application/vnd.github.v3+json'
    }
};
const DEFAULT_EXEMPT_DESCRIPTION = 'Passed in case the check is exempt.';
const DEFAULT_PIPELINE_STATUS = 'Pipeline Status';
const DEFAULT_PIPELINE_DESCRIPTION = 'Pipeline clear.';
const PRODUCTION_ENVIRONMENT = 'production';
const DEFAULT_BRANCH = 'main';
const CORE_APPROVED_PR_LABEL = 'CORE APPROVED';
const PEER_APPROVED_PR_LABEL = 'PEER APPROVED';
const READY_FOR_MERGE_PR_LABEL = 'READY FOR MERGE';
const QUEUED_FOR_MERGE_PREFIX = 'QUEUED FOR MERGE';
const FIRST_QUEUED_PR_LABEL = `${QUEUED_FOR_MERGE_PREFIX} #1`;
const JUMP_THE_QUEUE_PR_LABEL = 'JUMP THE QUEUE';
const DEFAULT_PR_TITLE_REGEX = '^(build|ci|chore|docs|feat|fix|perf|refactor|style|test|revert|Revert|BREAKING CHANGE)((.*))?: .+$';


/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLabels": () => (/* binding */ addLabels)
/* harmony export */ });
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6161);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


const addLabels = ({ pull_number, labels }) => _octokit__WEBPACK_IMPORTED_MODULE_1__/* .octokit.issues.addLabels */ .K.issues.addLabels(Object.assign({ labels: labels.split('\n'), issue_number: Number(pull_number) }, _actions_github__WEBPACK_IMPORTED_MODULE_0__.context.repo));


/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeLabel": () => (/* binding */ removeLabel)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6161);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



const removeLabel = ({ label, pull_number }) => _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.removeLabel */ .K.issues.removeLabel(Object.assign({ name: label, issue_number: Number(pull_number) }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo))
    .catch(error => {
    if (error.status === 404) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.info('Label is not present on PR.');
    }
});


/***/ }),

/***/ 5169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateMergeQueue": () => (/* binding */ updateMergeQueue)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9042);
/* harmony import */ var _add_labels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1939);
/* harmony import */ var _utils_get_queued_pr_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4281);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8710);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _remove_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const updateMergeQueue = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { items } } = yield (0,_utils_get_queued_pr_data__WEBPACK_IMPORTED_MODULE_2__/* .getQueuedPrData */ .Z)();
    return (0,bluebird__WEBPACK_IMPORTED_MODULE_3__.map)(items, item => {
        var _a;
        const mergeLabel = (_a = item.labels.find(label => { var _a; return (_a = label.name) === null || _a === void 0 ? void 0 : _a.startsWith(_constants__WEBPACK_IMPORTED_MODULE_0__/* .QUEUED_FOR_MERGE_PREFIX */ .Ee); })) === null || _a === void 0 ? void 0 : _a.name;
        if (!mergeLabel) {
            return;
        }
        const pull_number = String(item.number);
        const queueNumber = Number(mergeLabel.split('#')[1]);
        return Promise.all([
            (0,_add_labels__WEBPACK_IMPORTED_MODULE_1__.addLabels)({ pull_number, labels: `${_constants__WEBPACK_IMPORTED_MODULE_0__/* .QUEUED_FOR_MERGE_PREFIX */ .Ee} #${queueNumber - 1}` }),
            (0,_remove_label__WEBPACK_IMPORTED_MODULE_4__.removeLabel)({ pull_number, label: mergeLabel })
        ]);
    });
});


/***/ }),

/***/ 6161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ octokit)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


const octokit = (0,_actions_github__WEBPACK_IMPORTED_MODULE_1__.getOctokit)(_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput('github_token', { required: true })).rest;


/***/ }),

/***/ 4281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getQueuedPrData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9042);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6161);



const getQueuedPrData = () => {
    const { repo, owner } = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo;
    return _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.search.issuesAndPullRequests */ .K.search.issuesAndPullRequests({
        q: encodeURIComponent(`org:${owner} repo:${repo} type:pr state:open label:"${_constants__WEBPACK_IMPORTED_MODULE_0__/* .QUEUED_FOR_MERGE_PREFIX */ .Ee}"`)
    });
};


/***/ })

};
;
//# sourceMappingURL=169.index.js.map