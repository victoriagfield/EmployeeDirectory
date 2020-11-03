import React from "react";
import { MDBDataTable } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/table.css";


const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
        attributes: {
        },
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200
      },
      {
        label: "Age",
        field: "age",
        sort:  "disabled",
        width: 100
      },
      {
        label: "Email",
        field: "email",
        sort:  "disabled",
        width: 250
      },
      {
        label: 'Salary',
        field: 'salary',
        sort:  "disabled",
        width: 50
      }
    ],
    rows: [
      {
        name: "Tiffany Cook",
        position: "System Architect",
        office: "New York",
        age: '61',
        email: "tiffany.cook@example.com",
        salary: "$320k"
      },
      {
        name: "Brooklyn Howell",
        position: 'Accountant',
        office: "Austin",
        age: "35",
        email: "brooklyn.howell@example.com",
        salary: "$170k"
      },
      {
        name: "Gail Hall",
        position: 'Junior Technical Author',
        office: "New York",
        age: "28",
        email: "gail.hall@example.com",
        salary: '$86k'
      },
      {
        name: "Cedric Crawford",
        position: "Senior Javascript Developer",
        office: "New York",
        age: "50",
        email: "gail.hall@example.com",
        salary: "$200k"
      },
      {
        name: "Floyd Spencer",
        position: "Customer Service",
        office: "Chicago",
        age: "25",
        email: "floyd.spencer@example.com",
        salary: "55k"
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "Los Angeles",
        age: "45",
        email: "brielle.williamson@example.com",
        salary: "$372k"
      },
      {
        name: "Neil Carlson",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "30",
        email: "neil.carlson@example.com",
        salary: "$137k"
      },
      {
        name: "Johnny Davidson",
        position: "Integration Specialist",
        office: "Los Angeles",
        age: "55",
        email: "johnny.davidson@example.com",
        salary: "$327k"
      },
      {
        name: "Adeline LaRue",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "34",
        email: "adeline.larue@example.com",
        salary: "$205k"
      },
      {
        name: "Emma Frost",
        position: "Financial Analyst",
        office: "Los Angeles",
        age: "36",
        email: "emma.frost@example.com",
        salary: "$203"
      },
      {
        name: "John Mulaney",
        position: "Office Manager",
        office: "Austin",
        age: "39",
        email: "john.mulaney@example.com",
        salary: "100k"
      },
      {
        name: "Harleen Quinzell",
        position: "Support Lead",
        office: "Los Angeles",
        age: "38",
        email: "harleen.quinzell@example.com",
        salary: "$342k"
      },
      {
        name: "James Howlett",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        email: "james.howlett@example.com",
        salary: "470k"
      },
      {
        name: "Vanya Hargreeves",
        position: "Marketing Designer",
        office: "Chicago",
        age: "43",
        email: "vanya.hargreeves@example.com",
        salary: "$198k"
      },
      {
        name: "Marc Maron",
        position: "Operation Manager",
        office: "Austin",
        age: "48",
        email: "marc.maron@example.com",
        salary: "150k"
      },
      {
        name: "Ron Funches",
        position: "Marketing Designer",
        office: "New York",
        age: "37",
        email: "ron.funches@example.com",
        salary: "198k"
      },
      {
        name: "Eleanor Rigsby",
        position: "Sales Associate",
        office: "Los Angeles",
        age: "55",
        email: "eleanor.rigsby@example.com",
        salary: "145k"
      },
      {
        name: "Vanessa Rolland",
        position: "Director",
        office: "Chicago",
        age: "62",
        email: "vanessa.rolland@example.com",
        salary: "643k"
      },
      {
        name: "Steve Rodgers",
        position: "Development Lead",
        office: "New York",
        age: "61",
        email: "steve.rodgers@example.com",
        salary: "345k"
      },
      {
        name: "Belinda Hodges",
        position: "Software Engineer",
        office: "New York",
        age: "33",
        email: "belinda.hodges@example.com",
        salary: "115k"
      },
      {
        name: "Petunia Dursley",
        position: "Customer Service",
        office: "San Francisco",
        age: "61",
        email: "petunia.dursley@example.com",
        salary: "73k"
      },
      {
        name: "William Doyle",
        position: "Accountant",
        office: "Chicago",
        age: "48",
        email: "william.doyle@example.com",
        salary: "180k"
      },
      {
        name: "Apollo Rey",
        position: "Accountant",
        office: "Austin",
        age: "48",
        email: "apollo.rey@example.com",
        salary: "150k"
      },
      {
        name: "George Tolstoy",
        position: "Software Engineer",
        office: "Chicago",
        age: "41",
        email: "george.tolstoy@example.com",
        salary: "115k"
      },
      {
        name: "Virginia Austen",
        position: "Chief Marketing Officer",
        office: "San Francisco",
        age: "59",
        email: "virginia.austen@example.com",
        salary: "675k"
      },
      {
        name: "Jane Wolff",
        position: "Financial Advisor",
        office: "Los Angeles",
        age: "39",
        email: "jane.wolff@example.com",
        salary: "220k"
      },
      {
        name: "Yuri Wilde",
        position: "Financial Advisor",
        office: "New York",
        age: "43",
        email: "yuri.wilde@example.com",
        salary: "220k"
      },
      {
        name: "Ben Luther",
        position: "Reception",
        office: "Chicago",
        age: "23",
        email: "ben.luther@example.com",
        salary: "35k"
      },
      {
        name: "Mark Hemmingway",
        position: "Operation Manager",
        office: "Chicago",
        age: "48",
        email: "mark.hemmingway@example.com",
        salary: "150k"
      },
      {
        name: "Toni Alcott",
        position: "Integration Specialist",
        office: "Denver",
        age: "48",
        email: "toni.alcott@example.com",
        salary: "326k"
      },
      {
        name: "Charlotte Morrison",
        position: "Office Manager",
        office: "Chicago",
        age: "48",
        email: "charlotte.morrison@example.com",
        salary: "98k"
      },
      {
        name: "Louisa Shelley",
        position: "Developer",
        office: "Denver",
        age: "48",
        email: "louisa.shelley@example.com",
        salary: "91"
      },
      {
        name: "Percy Salinger",
        position: "Support Engineer",
        office: "Chicago",
        age: "36",
        email: "percy.salinger@example.com",
        salary: "88k"
      },
      {
        name: "Herman Dostoevsky",
        position: "Reception",
        office: "Denver",
        age: "21",
        email: "herman.dostoevsky@example.com",
        salary: "33k"
      },
      {
        name: "Hunter Gaiman",
        position: "Javascript Developer",
        office: "Chicago",
        age: "34",
        email: "hunter.gaiman@example.com",
        salary: "213k"
      },
      {
        name: "Wanda Maximoff",
        position: "Developer",
        office: "Chicago",
        age: "36",
        email: "wanda.maximoff@example.com",
        salary: "212k"
      },
      {
        name: "Wes Hugo",
        position: "Accountant",
        office: "Denver",
        age: "48",
        email: "wes.hugo@example.com",
        salary: "171k"
      },
      {
        name: "Viviane Atwood",
        position: "Chief Operating Office",
        office: "Chicago",
        age: "67",
        email: "viviane.atwood@example.com",
        salary: "825k"
      },
      {
        name: "Maya Plath",
        position: "Team Lead",
        office: "New York",
        age: "54",
        email: "mary.plath@example.com",
        salary: "222k"
      },
      {
        name: "Jeremy Walker",
        position: "Regional Director",
        office: "New York",
        age: "48",
        email: "jeremy.walker@example.com",
        salary: "178k"
      },
      {
        name: "Harper Harris",
        position: "Support Engineer",
        office: "San Francisco",
        age: "37",
        email: "harper.harris@example.com",
        salary: "143k"
      },
      {
        name: "Mary Wolstead",
        position: "Financial Controller",
        office: "Austin",
        age: "48",
        email: "mary.wolstead@example.com",
        salary: "425k"
      },
      {
        name: "Robert Bishop",
        position: "Software Engineer",
        office: "Los Angeles",
        age: "33",
        email: "robert.bishop@example.com",
        salary: "150k"
      },
      {
        name: "Thor Odinson",
        position: "Developer",
        office: "New York",
        age: "27",
        email: "thor.odinson@example.com",
        salary: "103k"
      }
    ]
  };

  return (
    <div className="bootstrapTable">
    <MDBDataTable className="table"
      hover
      responsive
      striped
      bordered
      sorting= {true}
      medium
      data={data}
    />
    </div>
  );
}

export default DatatablePage;