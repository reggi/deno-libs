import { people, Problem, Prisoner } from './100-priosner-problem.ts'

const LEADER = 'Adam';
const prisoners = people.map(name => new Prisoner(name, (name === LEADER)));
const problem = new Problem(prisoners)
problem.allVisits();
console.log(problem.visitCount);
console.log(prisoners);