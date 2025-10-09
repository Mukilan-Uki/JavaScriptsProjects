"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    sName;
    sAge;
    sDistrict;
    constructor(sName, sAge, sDistrict) {
        this.sName = sName;
        this.sAge = sAge;
        this.sDistrict = sDistrict;
    }
    setStudentName(name) {
        this.sName = name;
    }
    setStudentAge(age) {
        this.sAge = age;
    }
    setStudentDistrict(distric) {
        this.sDistrict = distric;
    }
    getStudentName() {
        return this.sName;
    }
    getStudentAge() {
        return this.sAge;
    }
    getStudentDistrict() {
        return this.sDistrict;
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map