const input = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const output = {};

for (const [student, subjects] of Object.entries(input)) {
    const scores = Object.values(subjects);
    const total = scores.reduce((sum, score) => sum + score, 0);
    
    output[student] = {
        average: total / scores.length
    };
}

console.log(output);
/* Output:
{
  student1: { average: 64.2 },
  student2: { average: 64.2 },
  student3: { average: 64.2 }
}
*/