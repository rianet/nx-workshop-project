import * as express from 'express';
import * as bodyParser from 'body-parser';
const args = process.argv.slice(2);
const throttle = args.indexOf('--throttle') >= 0;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let lastTicketId = 6;

app.get('/api/tickets', (req, res) => {
  setTimeout(() => {
    res.send(tickets);
  }, randomDelay(throttle));
});

app.get('/api/users', (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, randomDelay(throttle));
});

app.get('/api/companies', (req, res) => {
  setTimeout(() => {
    res.send(companies);
  }, randomDelay(throttle));
});

app.get('/api/companies/:id', (req, res) => {
  setTimeout(() => {
    const matching = companies.filter(t => t.id === +req.params.id)[0];
    if (matching) {
      res.send(matching);
    } else {
      res.status(404).send({error: `Cannot find company ${+req.params.id}`});
    }
  }, randomDelay(throttle));
});

app.get('/api/companies/:id/users', (req, res) => {
  setTimeout(() => {
    const matching = companies.filter(t => t.id === +req.params.id)[0];
    if (matching) {
      res.send(matching.userIds.map(userId => users.find(user => user.id === userId)));
    } else {
      res.status(404).send({error: `Cannot find company ${+req.params.id}`});
    }
  }, randomDelay(throttle));
});

app.get('/api/ticket/:id', (req, res) => {
  setTimeout(() => {
    const matching = tickets.filter(t => t.id === +req.params.id)[0];
    if (matching) {
      res.send(matching);
    } else {
      res.status(404).send({error: `Cannot find ticket ${+req.params.id}`});
    }
  }, randomDelay(throttle));
});

app.get('/api/users/:id', (req, res) => {
  setTimeout(() => {
    const matching = users.filter(t => t.id === +req.params.id)[0];
    if (matching) {
      res.send(matching);
    } else {
      res.status(404).send({error: `Cannot find user ${+req.params.id}`});
    }
  }, randomDelay(throttle));
});

app.post('/api/tickets', (req, res) => {
  setTimeout(() => {
    const t = req.body;
    if (!t.summary) {
      res.status(500).send({error: `Summary is a required field`});
    } else {
      const newTicket: Ticket = {
        id: ++lastTicketId,
        title: t.title,
        summary: t.summary,
        companyId: t.companyId,
        status: 'open',
        submittedByUserId: t.submittedByUserId,
        assignedToUserId: null
      };
      tickets.push(newTicket);
      res.send(newTicket);
    }
  }, randomDelay(throttle));
});

app.post('/api/assign', (req, res) => {
  setTimeout(() => {
    const ticketId = req.body.ticketId;
    const assignToUserId = req.body.assignToUserId;

    const matchingTicket = tickets.filter(t => t.id === ticketId)[0];
    const matchingUser = users.filter(u => u.id === assignToUserId)[0];

    if (!matchingTicket) {
      res.status(404).send({error: `Cannot find ticket ${ticketId}`});
    } else if (!matchingUser) {
      res.status(404).send({error: `Cannot find user ${assignToUserId}`});
    } else {
      matchingTicket.assignedToUserId = assignToUserId;
      res.send(matchingTicket);
    }
  }, randomDelay(throttle));
});

app.post('/api/complete', (req, res) => {
  setTimeout(() => {
    const ticketId = req.body.ticketId;
    const matchingTicket = tickets.filter(t => t.id === ticketId)[0];
    if (!matchingTicket) {
      res.status(404).send({error: `Cannot find ticket ${ticketId}`});
    } else {
      matchingTicket.status = 'completed';
      res.send(matchingTicket);
    }
  }, randomDelay(throttle));
});

app.listen(3000, () => console.log('Backend service listening on port 3000!'));


function randomDelay(throttleEnabled: boolean = false) {
  return throttleEnabled ? Math.random() * 4000 : 1;
}


interface Ticket {
  id: number;
  title: string;
  summary: string;
  status: string;
  companyId: number;
  submittedByUserId: number;
  assignedToUserId: number;
}

interface Company {
  id: number;
  name: string;
  userIds: number[];
}

interface User {
  id: number;
  username: string;
  fullName: string;
  isAgent: boolean;
}


const users: User[] = [
  {id: 1, username: 'cmoss', fullName: 'Carter Moss', isAgent: false},
  {id: 2, username: 'francis', fullName: 'Frank Smith', isAgent: false},
  {id: 3, username: 'yardling', fullName: 'Kim Rush', isAgent: false},
  {id: 4, username: 'mr90s', fullName: 'Peter Jones', isAgent: false},
  {id: 5, username: 'msantana', fullName: 'Margo Santana', isAgent: false},
  {id: 6, username: 'optin88', fullName: 'Mark Press', isAgent: false},
  {id: 7, username: 'tinycap', fullName: 'Terry Cruz', isAgent: false}
];


const tickets: Ticket[] = [
  {id: 1, title: '', summary: '', status: 'open', companyId: 1, submittedByUserId: 1, assignedToUserId: 1},
  {id: 2, title: '', summary: '', status: 'completed', companyId: 2, submittedByUserId: 1, assignedToUserId: 1},
  {id: 3, title: '', summary: '', status: 'open', companyId: 2, submittedByUserId: 1, assignedToUserId: 1},
  {id: 4, title: '', summary: '', status: 'open', companyId: 3, submittedByUserId: 1, assignedToUserId: 1},
  {id: 5, title: '', summary: '', status: 'completed', companyId: 4, submittedByUserId: 1, assignedToUserId: 1},
  {id: 6, title: '', summary: '', status: 'completed', companyId: 4, submittedByUserId: 1, assignedToUserId: 1}
];

const companies: Company[] = [
  {
    id: 1,
    name: 'Lake Farms',
    userIds: [1, 2, 3]
  },
  {
    id: 2,
    name: 'UWear',
    userIds: [4]
  },
  {
    id: 3,
    name: 'Time Travel Inc',
    userIds: [5]
  },
  {
    id: 4,
    name: 'Range Solutions',
    userIds: [6]
  },
  {
    id: 5,
    name: 'Metric Acoustics',
    userIds: [7]
  }
];
