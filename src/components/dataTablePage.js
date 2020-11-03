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
      }
    ],
    rows: [
      {
        name: "Tiffany Cook",
        position: "System Architect",
        office: "New York",
        age: '61',
        email: "tiffany.cook@example.com"
      },
      {
        name: "Brooklyn Howell",
        position: 'Accountant',
        office: "Austin",
        age: "35",
        email: "brooklyn.howell@example.com"
      },
      {
        name: "Gail Hall",
        position: 'Junior Technical Author',
        office: "New York",
        age: "28",
        email: "gail.hall@example.com"
      },
      {
        name: "Cedric Crawford",
        position: "Senior Javascript Developer",
        office: "New York",
        age: "50",
        email: "gail.hall@example.com"
      },
      {
        name: "Floyd Spencer",
        position: "Customer Service",
        office: "Chicago",
        age: "25",
        email: "floyd.spencer@example.com"
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "Los Angeles",
        age: "45",
        email: "brielle.williamson@example.com"
      },
      {
        name: "Neil Carlson",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "30",
        email: "neil.carlson@example.com"
      },
      {
        name: "Johnny Davidson",
        position: "Integration Specialist",
        office: "Los Angeles",
        age: "55",
        email: "johnny.davidson@example.com"
      },
      {
        name: "Adeline LaRue",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "34",
        email: "adeline.larue@example.com"
      },
      {
        name: "Emma Frost",
        position: "Financial Analyst",
        office: "Los Angeles",
        age: "36",
        email: "emma.frost@example.com"
      },
      {
        name: "John Mulaney",
        position: "Office Manager",
        office: "Austin",
        age: "39",
        email: "john.mulaney@example.com"
      },
      {
        name: "Harleen Quinzell",
        position: "Support Lead",
        office: "Los Angeles",
        age: "38",
        email: "harleen.quinzell@example.com"
      },
      {
        name: "James Howlett",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        email: "james.howlett@example.com"
      },
      {
        name: "Vanya Hargreeves",
        position: "Marketing Designer",
        office: "Chicago",
        age: "43",
        email: "vanya.hargreeves@example.com"
      },
      {
        name: "Marc Maron",
        position: "Operation Manager",
        office: "Austin",
        age: "48",
        email: "marc.maron@example.com"
      },
      {
        name: "Ron Funches",
        position: "Marketing Designer",
        office: "New York",
        age: "37",
        email: "ron.funches@example.com"
      },
      {
        name: "Eleanor Rigsby",
        position: "Sales Associate",
        office: "Los Angeles",
        age: "55",
        email: "eleanor.rigsby@example.com"
      },
      {
        name: "Vanessa Rolland",
        position: "Director",
        office: "Chicago",
        age: "62",
        email: "vanessa.rolland@example.com"
      },
      {
        name: "Steve Rodgers",
        position: "Development Lead",
        office: "New York",
        age: "61",
        email: "steve.rodgers@example.com"
      },
      {
        name: "Belinda Hodges",
        position: "Software Engineer",
        office: "New York",
        age: "33",
        email: "belinda.hodges@example.com"
      },
      {
        name: "Petunia Dursley",
        position: "Customer Service",
        office: "San Francisco",
        age: "61",
        email: "petunia.dursley@example.com"
      },
      {
        name: "William Doyle",
        position: "Accountant",
        office: "Chicago",
        age: "48",
        email: "william.doyle@example.com"
      },
      {
        name: "Apollo Rey",
        position: "Accountant",
        office: "Austin",
        age: "48",
        email: "apollo.rey@example.com"
      },
      {
        name: "George Tolstoy",
        position: "Software Engineer",
        office: "Chicago",
        age: "41",
        email: "george.tolstoy@example.com"
      },
      {
        name: "Virginia Austen",
        position: "Chief Marketing Officer",
        office: "San Francisco",
        age: "59",
        email: "virginia.austen@example.com"
      },
      {
        name: "Jane Wolff",
        position: "Financial Advisor",
        office: "Los Angeles",
        age: "39",
        email: "jane.wolff@example.com"
      },
      {
        name: "Yuri Wilde",
        position: "Financial Advisor",
        office: "New York",
        age: "43",
        email: "yuri.wilde@example.com"
      },
      {
        name: "Ben Luther",
        position: "Reception",
        office: "Chicago",
        age: "23",
        email: "ben.luther@example.com"
      },
      {
        name: "Mark Hemmingway",
        position: "Operation Manager",
        office: "Chicago",
        age: "48",
        email: "mark.hemmingway@example.com"
      },
      {
        name: "Toni Alcott",
        position: "Integration Specialist",
        office: "Denver",
        age: "48",
        email: "toni.alcott@example.com"
      },
      {
        name: "Charlotte Morrison",
        position: "Office Manager",
        office: "Chicago",
        age: "48",
        email: "charlotte.morrison@example.com"
      },
      {
        name: "Louisa Shelley",
        position: "Developer",
        office: "Denver",
        age: "48",
        email: "louisa.shelley@example.com"
      },
      {
        name: "Percy Salinger",
        position: "Support Engineer",
        office: "Chicago",
        age: "36",
        email: "percy.salinger@example.com"
      },
      {
        name: "Herman Dostoevsky",
        position: "Reception",
        office: "Denver",
        age: "21",
        email: "herman.dostoevsky@example.com"
      },
      {
        name: "Hunter Gaiman",
        position: "Javascript Developer",
        office: "Chicago",
        age: "34",
        email: "hunter.gaiman@example.com"
      },
      {
        name: "Wanda Maximoff",
        position: "Developer",
        office: "Chicago",
        age: "36",
        email: "wanda.maximoff@example.com"
      },
      {
        name: "Wes Hugo",
        position: "Accountant",
        office: "Denver",
        age: "48",
        email: "wes.hugo@example.com"
      },
      {
        name: "Viviane Atwood",
        position: "Chief Operating Office",
        office: "Chicago",
        age: "67",
        email: "viviane.atwood@example.com"
      },
      {
        name: "Maya Plath",
        position: "Team Lead",
        office: "New York",
        age: "54",
        email: "mary.plath@example.com"
      },
      {
        name: "Jeremy Walker",
        position: "Regional Director",
        office: "New York",
        age: "48",
        email: "jeremy.walker@example.com"
      },
      {
        name: "Harper Harris",
        position: "Support Engineer",
        office: "San Francisco",
        age: "37",
        email: "harper.harris@example.com"
      },
      {
        name: "Mary Wolstead",
        position: "Financial Controller",
        office: "Austin",
        age: "48",
        email: "mary.wolstead@example.com"
      },
      {
        name: "Robert Bishop",
        position: "Software Engineer",
        office: "Los Angeles",
        age: "33",
        email: "robert.bishop@example.com"
      },
      {
        name: "Thor Odinson",
        position: "Developer",
        office: "New York",
        age: "27",
        email: "thor.odinson@example.com"
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