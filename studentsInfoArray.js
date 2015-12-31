var studentsInfoArray =  [
    {
        name:{firstName: "Iulian",lastName:"Tabara"},
        age: 16,
        subjects:["Maths","Physics","Chemistry"],
        attendance:{
            Jan:"100%",
            Feb:"99%",
            Mar:"100%"
        }
    },
    {
        name:{firstName: "Emilian",lastName:"Tabara"},
        age: 16,
        subjects:["Maths","Physics","Chemistry"],
        attendance:{
            Jan:"100%",
            Feb:"99%",
            Mar:"100%"
        }
    },
    { name:{firstName: "Doina", lastName:"Tabara"},
    age: 12,
    subjects:["Small Business","Medium Business","Journalist"],
    attendance:{
        Jan:"100%",
        Feb:"100%%",
        Mar:"100%"
    }
}
];
db.studentsInfoCollection.insert(studentsInfoArray);
