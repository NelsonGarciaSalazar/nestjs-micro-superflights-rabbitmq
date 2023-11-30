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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const models_1 = require("../common/models/models");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UserService = class UserService {
    constructor(model) {
        this.model = model;
    }
    async checkPassword(password, passwordBD) {
        return await bcrypt.compare(password, passwordBD);
    }
    async findByUsername(username) {
        return this.model.findOne({ username });
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
    async create(userDTO) {
        const hash = await this.hashPassword(userDTO.password);
        const newUser = new this.model({ ...userDTO, password: hash });
        return await newUser.save();
    }
    async findAll() {
        return this.model.find();
    }
    async findOne(id) {
        return this.model.findById(id);
    }
    async update(id, userDTO) {
        const hash = await this.hashPassword(userDTO.password);
        const user = { ...userDTO, password: hash };
        return this.model.findByIdAndUpdate(id, user, { new: true });
    }
    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return { status: common_1.HttpStatus.OK, msg: 'Deleted' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(models_1.USER.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
//# sourceMappingURL=user.service.js.map