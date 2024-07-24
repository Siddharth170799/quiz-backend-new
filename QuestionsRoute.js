import express from "express";
import Questions from "./Schema.js";
import Questions4 from "./Schema2.js";


const QuestionsRoute = express.Router();

QuestionsRoute.post("/postQuestions", async (req, res) => {
  const questionsArray = [
    {
      question: "Who is India's Prime Minister",
      option1: "Narendra Modi",
      option2: "Rahul Gandhi",
      option3: "Mamata Banerjee",
      option4: "Chandrababu Naidu",
      answer: "Narendra Modi",
      time: 20,
      key: 1,
    },
    {
      question: "Who is India's President",
      option1: "Droupadi Murmu",
      option2: "Sonia Gandhi",
      option3: "Ajay",
      option4: "Eknath Shinde",
      answer: "Droupadi Murmu",
      time: 30,
      key: 2,

    },
    {
      question: "Who is India's Defence Minister",
      option1: "Amit Shah",
      option2: "Nirmala Sitharaman",
      option3: "Rajnath Singh",
      option4: "Jay Shah",
      answer: "Rajnath Singh",
      time: 30,
      key: 3,
    },
    {
      question: "Who is India's Finance Minister",
      option1: "Kiren Rijiju",
      option2: "Ravi Kishan",
      option3: "Ram Mohan Naidu",
      option4: "Nirmala Sitharaman",
      answer: "Nirmala Sitharaman",
      time: 30,
      key: 4,
    },
    {
      question: "Who is India's Civil Aviation Minister",
      option1: "Raghunandan Rao",
      option2: "Bandi Sanjay",
      option3: "Smriti Irani",
      option4: "Ram Mohan Naidu",
      answer: "Ram Mohan Naidu",
      time: 30,
      key: 5,
    },
    {
      question: "Who is India's Agriculture Minister",
      option1: "Kiran Reddy",
      option2: "Jayant Sinha",
      option3: "Shivraj Singh Chouhan",
      option4: "Nitin Gadkari",
      answer: "Shivraj Singh Chouhan",
      time: 30,
      key: 6,
    },
    {
      question: "Who is India's Transport Minister",
      option1: "Nitin Gadkari",
      option2: "Jiten Ram Manjhi",
      option3: "Akhilesh Yadav",
      option4: "Subroto Chaterjee",
      answer: "Nitin Gadkari",
      time: 30,
      key: 7,
    },
    {
      question: "Who is India's Jal Shakti Minister",
      option1: "Ajit Pawar",
      option2: "Shatrughan Sinha",
      option3: "Om Birla",
      option4: "Gajendra Singh Shekhawat",
      answer: "Gajendra Singh Shekhawat",
      time: 30,
      key: 8,
    },
    {
      question: "Who is India's Heavy Industries Minister",
      option1: "HD Kumaraswamy",
      option2: "DK ShivaKumar",
      option3: "Siddaramaiah",
      option4: "Devendra Fadnavis",
      answer: "HD Kumaraswamy",
      time: 30,
      key: 9,
    },
    {
      question: "Who is India's Environment Minister",
      option1: "Ajit Pawar",
      option2: "Bhupendra Yadav",
      option3: "Mallikarjun Kharge",
      option4: "Ram",
      answer: "Bhupendra Yadav",
      time: 30,
      key: 10,
    },
    {
      question: "Who is India's Parliamentary Affairs Minister",
      option1: "Nitish Kumar",
      option2: "MK Stalin",
      option3: "Prahlad Joshi",
      option4: "Ashwini Vaishnaw",
      answer: "Prahlad Joshi",
      time: 30,
      key: 11,
    },
  ];

  const questions2 = await Questions.insertMany(questionsArray);
  res.send({
    message: "questions posted successfully",
    data1: questions2,
    status: 500,
  });
});

QuestionsRoute.delete('/clearDocuments', async (req, res) => {

    const {hi} = req.body
    console.log(hi,"namaste")
    try {
      await Questions4.deleteMany({})
      res.status(200).send('Documents cleared');
    } catch (error) {
      res.status(500).send('Error clearing documents');
      console.log("error")
    }
  });

QuestionsRoute.post('/correctQuestions',async(req,res)=>{

    const {details} = req.body;
    console.log(details)
    delete details._id;

    const details2 = new Questions4(details)
    const details1 = await details2.save()
    res.send({message:"posted successfully",data:details1,status:500})
})






QuestionsRoute.get("/getQuestions", async (req, res) => {
  const details = await Questions.find();
  res.send({
    message: "sent questions successsfully",
    data: details,
    status: 500,
  });
});


QuestionsRoute.get("/getCorrectQuestions",async(req,res)=>{


const details = await Questions4.find()
res.send({message:"sent correct questions successfully",data:details,status:200})


})

export default QuestionsRoute;





















