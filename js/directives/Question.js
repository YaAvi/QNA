'use strict';
qna.directive('questionCard', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/question.html',
        scope: {
            question: '=',
            answers: '='
        }
    };
});