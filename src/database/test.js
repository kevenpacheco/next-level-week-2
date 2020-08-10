const Database = require('./db');
const createProffy = require('./createProffy')

Database.then( async db => {
    // Inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "999999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20",

    }
    
    classScheduleValues = [
        //
        {
            weekday: 1,
            time_from: 720,
            time_to: 1120
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1120
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues })

    // Consultar dados

    // Todos os proffys
    const selectedProffys = await db.all('SELECT * FROM proffys');

    // Consultar as classes de um determinado professor
    // Trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id = "1"
        AND classes_schedule.weekday = "0"
        AND classes_schedule.time_from <= "1320"
        AND classes_schedule.time_to > "1320"
    `)

    console.log(selectClassesSchedules)
})