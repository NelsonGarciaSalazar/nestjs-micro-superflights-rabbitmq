"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });
exports.UserSchema.index({ username: 1 }, { unique: true });
exports.UserSchema.index({ email: 1 }, { unique: true });
//# sourceMappingURL=user.schema.js.map