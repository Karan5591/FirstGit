class Student{
    static count=0; 
    constructor(name , age , phone_number, board_marks)
    {
        this.naam= name;
        this.age=age;
        this.phone_number=phone_number;
        this.board_marks=board_marks;
        Student.count++
    }

      eligible_for_placement=(age)=>
    {
        if(this.age>=age && this.board_marks>=40)
        {
            console.log(`${this.naam} is eligible`);
        }
        else{
            console.log(`${this.naam} is not eligble`);
        }
    }

}




let stu1=new Student("karan", 29, 1234567, 70 )
let stu2=new Student("Ajay", 21, 12345678, 40 )
let stu3=new Student("amit", 22, 12345679, 50 )
let stu4=new Student("Aniket",25, 12345676, 60 )
let stu5=new Student("Amar", 30, 12345673, 20 )
stu1.eligible_for_placement(23);
stu2.eligible_for_placement(23);
stu3.eligible_for_placement(23);
stu4.eligible_for_placement(23);
stu5.eligible_for_placement(23);

console.log(`Total Registered Students ${Student.count}`);