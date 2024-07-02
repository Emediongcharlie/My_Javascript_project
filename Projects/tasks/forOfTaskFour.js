const map = new Map(
members = ["Emily", "Jack", "Sophia", "Daniel"],
books = ["java", "python", "javascript", "django"])

for(let [members, books] of map){
    console.log(members, books)
}