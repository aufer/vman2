import * as fs   from 'fs';
import * as path from 'path';

const importFile = 'members.csv';

const membersList = fs.readFileSync(path.join('/Users/andre.ufer/Downloads', importFile), {encoding: 'utf8'});

const rows = membersList.split('\n');

const result = rows.map(row => {
  const fields = row.split(',');
  return {
    firstName: fields[3],
    lastName: fields[2],
    street: fields[6],
    streetNo: fields[7],
    location: fields[5],
    postCode: fields[4],
    phone: fields[8] && !fields[8].startsWith('01') ? fields[8] : undefined,
    mobile: fields[8] && fields[8].startsWith('01') ? fields[8] : undefined,
    email: fields[9],
    premium: (+fields[12] || 5) * 12,
    iban: fields[10],
    sepaRef: fields[13],
    state: 'active',
    joined: fields[0],
  };
})

console.log(result);

fs.writeFileSync(path.join('/Users/andre.ufer/Downloads', 'members.json'), JSON.stringify(result, null, 2));
