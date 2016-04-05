'use strict';
qna.directive('questionCard', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/questionCard.html',
        scope: {
            question: '=',
            answers: '='
        }
    };
});