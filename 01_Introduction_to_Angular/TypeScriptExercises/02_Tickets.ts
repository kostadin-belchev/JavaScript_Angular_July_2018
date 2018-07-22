function ticketsSolve(tickets : Array<string>, sortCriteria : string) {
  class Ticket {
    constructor(public destination : string, public price : number, public status : string) {  }
  }
  
  let unsortedTickets = []
  for (const ticketDescription of tickets) {
    let [destination, price, status] = ticketDescription.split('|')
    unsortedTickets.push(new Ticket(destination, Number(price), status))
  }

  return unsortedTickets.sort((a, b) => {
    if (sortCriteria === 'destination') {
      return a.destination.localeCompare(b.destination)
    } else if (sortCriteria === 'price') {
      return a.price.localeCompare(b.price)
    } else if (sortCriteria === 'status') {
      return a.status.localeCompare(b.status)
    }
  })
}

// console.log(ticketsSolve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ))

console.log(ticketsSolve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))