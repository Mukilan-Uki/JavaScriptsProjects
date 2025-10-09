export class Student{
    private sName:string;
    private sAge:number;
    private sDistrict:string;
    
    constructor(sName:string, sAge:number, sDistrict:string){
        this.sName=sName;
        this.sAge=sAge;
        this.sDistrict=sDistrict;
    }

    public setStudentName(name:string){
        this.sName=name;
    }

    public setStudentAge(age:number){
        this.sAge=age;
    }

    public setStudentDistrict(distric:string){
        this.sDistrict=distric;
    }

    public getStudentName(){
        return this.sName;
    }

    public getStudentAge(){
        return this.sAge;
    }

    public getStudentDistrict(){
        return this.sDistrict;
    }
}