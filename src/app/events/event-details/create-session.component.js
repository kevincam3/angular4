"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var event_service_1 = require("../shared/event.service");
var CreateSessionComponent = (function () {
    function CreateSessionComponent(eventService) {
        this.eventService = eventService;
        this.saveNewSession = new core_1.EventEmitter();
        this.cancelAddSession = new core_1.EventEmitter();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.newSessionForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, this.noNameKevin]),
            presenter: new forms_1.FormControl('', forms_1.Validators.required),
            duration: new forms_1.FormControl('', forms_1.Validators.required),
            level: new forms_1.FormControl('', forms_1.Validators.required),
            abstract: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(400)])
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    CreateSessionComponent.prototype.noNameKevin = function (control) {
        var hasName = control.value.includes('Kevin') || control.value.includes('kevin');
        if (hasName) {
            return { 'noNameKevin': 'Kevin' };
        }
        return null;
    };
    return CreateSessionComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateSessionComponent.prototype, "saveNewSession", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateSessionComponent.prototype, "cancelAddSession", void 0);
CreateSessionComponent = __decorate([
    core_1.Component({
        selector: 'create-session',
        templateUrl: 'app/events/event-details/create-session.component.html',
        styles: ["\n        em{float:right; color:#E05C65; padding-left: 10px}\n        .error input, .error select, error textarea{background-color: #E3C3C5;}\n        .error ::-webkit-input-placeholder{color:#999;}\n        .error ::-moz-placeholder{color:#999;}\n        .error :-moz-placeholder{color:#999;}\n        .error :-ms-input-placeholder{color:#999;}\n    "]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], CreateSessionComponent);
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map