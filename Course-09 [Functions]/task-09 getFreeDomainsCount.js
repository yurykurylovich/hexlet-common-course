/* getFreeDomainsCount.js
Write and export by default getFreeDomainsCount() function that takes a list of emails and returns an object with free domains and the number of the emails on this domains from the list.
*/

// solution
const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com"];
const getFreeDomainsCount = (emails) =>
  emails
    .filter(email => freeEmailDomains.includes(email.split('@')[1]))
    .reduce((acc, free) => {
      let domain = free.split('@')[1]
      acc.hasOwnProperty(domain)
        ? acc[domain] += 1
        : acc[domain] = 1
      return acc;
    }, {})

// test
const emails = [
  "info@gmail.com",
  "info@yandex.ru",
  "info@hotmail.com",
  "mk@host.com",
  "support@hexlet.io",
  "key@yandex.ru",
  "sergey@gmail.com",
  "vovan@gmail.com",
  "vovan@hotmail.com",
];

console.log(getFreeDomainsCount(emails));
// { 'gmail.com': 3, 'yandex.ru': 2, 'hotmail.com': 2 }
