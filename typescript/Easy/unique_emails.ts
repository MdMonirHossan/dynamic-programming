/**
    Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.
    For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
    If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

    For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
    If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

    For example, "m.y+name@email.com" will be forwarded to "my@email.com".
    It is possible to use both of these rules at the same time.

    Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

    Example 1:
    Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    Output: 2
    Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
    
    Example 2:
    Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
    Output: 3
*/
class UniqueEmails {
  constructor(private readonly emails: string[]) {
    this.emails = emails;
  }
  /**
   * @description general solution.
   * @returns
   */
  solution() {
    let uniqueEmails = new Set();
    for (const e of this.emails) {
      let [localName, domain] = e.split("@");
      [localName] = localName.split("+");
      localName = localName.split(".").join("");
      uniqueEmails.add(`${localName}@${domain}`);
    }
    return uniqueEmails.size;
  }
  /**
   * @description complex solution
   * @returns
   */
  solution2() {
    let uniqueEmails = new Set();
    let j = 0,
      localName = "";
    for (const e of this.emails) {
      while (!['@', '+'].includes(e[j])) {
        if (e[j] !== ".") {
          localName += e[j];
        }
        j += 1;
      }
      while (e[j] !== "@") {
        j += 1;
      }
      const domain: string = e.slice(j);
      uniqueEmails.add(localName + domain);
      j = 0;
      localName = "";
    }
    console.log('---', uniqueEmails)
    return uniqueEmails.size;
  }
}

const uniqueEmailsObj = new UniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
console.log(uniqueEmailsObj.solution2());
