const testMovies = [
    {
        "id": "tt0096895",
        "title": "Batman",
        "release": { "year": "1989" },
        "genre": ["Action", "Sci-Fi"],
        "director": "Tim Burton",
        "mainCast": [
            {
                "name": "Michael Keaton",
                "photo": "https://m.media-amazon.com/images/M/MV5BZmNiZmMzN2MtOTNkMy00YjA1LTg4NzktMWI4Njg1NzI3ODAyXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_QL75_UX140_CR0,9,140,207_.jpg"
            },
            {
                "name": "Jack Nicholson", "photo": "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_QL75_UY207_CR5,0,140,207_.jpg"
            },
            {
                "name": "Kim Basinger",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTQyMDkxNjcxNV5BMl5BanBnXkFtZTcwODMyNzgyOA@@._V1_QL75_UY207_CR13,0,140,207_.jpg"
            }],
        "plot": "After witnessing the death of his beloved parents in front of his face, billionaire Bruce Wayne vows himself to protecting the good people of Gotham City against evil forces that threaten the city. But his vow is put to the test when he starts to wage his crime fighting crusade against the maniacal Clown Prince of Crime...also known as the Joker.",
        "plotAuthor": { "name": "Blazer346", "link": "https://www.imdb.com/search/title/?plot_author=blazer346&sort=alpha,asc" },
        "trailerId": "vi2568602905",
        "poster": "https://m.media-amazon.com/images/M/MV5BZmY1ZmQ3ZDAtNDU3Zi00NjI4LWFmMTEtZjU5MDk4N2ZmYzAwXkEyXkFqcGdeQXVyMTQwODQwMzAy._V1_.jpg"
    },
    {
        "id": "tt6146586",
        "title": "John Wick 3",
        "release": { "year": "2019" },
        "genre": ["Action"],
        "director": "Chad Stahelski",
        "mainCast": [{ "name": "Keanu Reeves", "photo": "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_QL75_UX140_CR0,1,140,207_.jpg" }, { "name": "Halle Berry", "photo": "https://m.media-amazon.com/images/M/MV5BMjIxNzc5MDAzOV5BMl5BanBnXkFtZTcwMDUxMjMxMw@@._V1_QL75_UY207_CR7,0,140,207_.jpg" }, { "name": "Ian McShane", "photo": "https://m.media-amazon.com/images/M/MV5BMjg5NDg3OTQtYzMyYS00YjhhLTk2NmEtZTExNGViYTczZTU2XkEyXkFqcGdeQXVyMTU1MTU2MDI@._V1_QL75_UY207_CR8,0,140,207_.jpg" }],
        "plot": "John Wick is on the run for two reasons, as he is being hunted for a global $14 million dollar open contract on his life, and for breaking a central rule: taking a life on Continental Hotel grounds. The victim was a member of the High Table who ordered the open contract. John should have already been executed, except the Continental's manager, Winston, has given him a one-hour grace period before he's 'Excommunicado' - membership revoked, banned from all services and cut off from other members. John uses the service industry to stay alive as he fights and kills his way out of New York City.",
        "plotAuthor": { "name": "Santhosh", "link": "https://www.imdb.com/search/title/?plot_author=santhosh&sort=alpha,asc" },
        "trailerId": "vi3978017305",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTE4NmVmNTctMjNlZi00ODQwLTgxYmYtOGZhNzFlOTA0ODRiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UY678_.jpg "
    },
    {
        "id": "tt2911666",
        "title": "John Wick",
        "release": { "year": "2014" },
        "genre": ["Action"],
        "director": "Chad Stahelski",
        "mainCast": [{ "name": "Keanu Reeves", "photo": "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_QL75_UX140_CR0,1,140,207_.jpg" }, { "name": "Michael Nyqvist", "photo": "https://m.media-amazon.com/images/M/MV5BMTg1MDM4MTg1NV5BMl5BanBnXkFtZTcwMTExOTcwNw@@._V1_QL75_UY207_CR6,0,140,207_.jpg" }, { "name": "Alfie Allen", "photo": "https://m.media-amazon.com/images/M/MV5BNWQyMjA2MzctY2Q1Mi00MWQzLWEwYTUtYTQ3NmY2NTQwNTlmXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_QL75_UY207_CR8,0,140,207_.jpg" }],
        "plot": "With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman's thirst for retribution.",
        "plotAuthor": { "name": "Nick Riganas", "link": "https://www.imdb.com/search/title/?plot_author=nick%20riganas&sort=alpha,asc" },
        "trailerId": "vi2273816345",
        "poster": "https://m.media-amazon.com/images/M/MV5BMmU1ZTAzMWItYjA1Yi00Njk2LWEwNjUtMThiMDk2MzZiNjMwXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX410_.jpg "
    },
    {
        "id": "tt8367814",
        "title": "The Gentlemen",
        "release": { "year": "2020" },
        "genre": ["Action", "Drama", "Biography", "Documentary", "Romance", "Film Noir",],
        "director": "Guy Ritchie",
        "mainCast": [{ "name": "Matthew McConaughey", "photo": "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_QL75_UX140_CR0,10,140,207_.jpg" }, { "name": "Charlie Hunnam", "photo": "https://m.media-amazon.com/images/M/MV5BMjE5NjE5Mzk2MV5BMl5BanBnXkFtZTcwODI5MDE1Ng@@._V1_QL75_UY207_CR4,0,140,207_.jpg" }, { "name": "Michelle Dockery", "photo": "https://m.media-amazon.com/images/M/MV5BOGY4NjBjMGUtZmMyNy00NTA2LWFhOTEtN2FhOGZmZWI1MThkXkEyXkFqcGdeQXVyMTMyNzI3NzIy._V1_QL75_UX140_CR0,1,140,207_.jpg" }],
        "plot": "A talented American graduate of Oxford, using his unique skills, and audacity, creates a marijuana empire using the estates of impoverished British aristocrats. However, when he tries to sell his empire to a fellow American billionaire, a chain of events unfolds, involving blackmail, deception, mayhem and murder between street thugs, Russian oligarchs, Triad gangsters and gutter journalists.",
        "plotAuthor": { "name": "Peter-Patrick76", "link": "https://www.imdb.com/search/title/?plot_author=peter-patrick76%20(peter-patrick@mail.com)&sort=alpha,asc" },
        "trailerId": "vi1990573593",
        "poster": "https://m.media-amazon.com/images/M/MV5BOTNjMzcwNmYtOTQ5Ni00ZDNjLWFmYjEtNTQ1MjE0NTUzNWIxXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UY679_.jpg"
    },
    {
        "id": "tt0101701",
        "title": "Des Wahnsinns Fette Beute",
        "release": { "year": "1991" },
        "genre": ["Comedy", "Family", "Fantasy"],
        "director": "Tom Mankiewicz",
        "mainCast": [{ "name": "John Candy", "photo": "https://m.media-amazon.com/images/M/MV5BMzQ3MzQzODUxMF5BMl5BanBnXkFtZTcwMjY5MTkyOA@@._V1_QL75_UX140_CR0,3,140,207_.jpg" }, { "name": "Mariel Hemingway", "photo": "https://m.media-amazon.com/images/M/MV5BMTI2ODI4ODc4MV5BMl5BanBnXkFtZTYwNjY1OTYz._V1_QL75_UY207_CR3,0,140,207_.jpg" }, { "name": "Emma Samms", "photo": "https://m.media-amazon.com/images/M/MV5BMTg0MDAzNTA5Ml5BMl5BanBnXkFtZTcwNTQ0MjYwOA@@._V1_QL75_UX140_CR0,3,140,207_.jpg" }],
        "plot": "Jack is the head writer for a successful soap opera, and he's sweet on the show's star, lovely Laura. It's easy for everyone but Jack to see that she's playing him for a sap. But a conk on the head brings Jack some new insights - and some new powers. He finds himself in Ashford Falls, site of his fictional soap opera -- and everything he writes comes true! It's a fantastic opportunity to get Rachel, Laura's character, to fall in love with him. But life isn't easy even in the fictional world, and even when you're the author!",
        "plotAuthor": { "name": "Rick Munoz", "link": "https://www.imdb.com/search/title/?plot_author=rick%20munoz%20%3Crick.munoz@his.com%3E&sort=alpha,asc" },
        "trailerId": "vi1093845017",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzM3NjgxMDEtNWQyMi00MGYzLWI0YTMtOGZhMjRkYWNiYmUwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_FMjpg_UY873_.jpg"
    },
    {
        "id": "tt0102070",
        "title": "Hudson Hawk",
        "release": { "year": "1991" },
        "genre": ["Comedy"],
        "director": "Michael Lehmann",
        "mainCast": [{
            "name": "Bruce Willis",
            "photo": "https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_QL75_UY207_CR18,0,140,207_.jpg"
        },
        {
            "name": "Danny Aiello",
            "photo": "https://m.media-amazon.com/images/M/MV5BNTMxMjYzNzk5Nl5BMl5BanBnXkFtZTcwNzU4NDgwMw@@._V1_QL75_UY207_CR28,0,140,207_.jpg"
        },
        {
            "name": "Andie MacDowell",
            "photo": "https://m.media-amazon.com/images/M/MV5BZTJjNmI3MzgtN2Q2Yi00NzQ3LTk2YzQtMzE2MmFkMWVhYzYxXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_QL75_UX140_CR0,1,140,207_.jpg"
        }],
        "plot": "Eddie Hawkins, called Hudson Hawk has just been released from ten years of prison and is planning to spend the rest of his life honestly. But then the crazy Mayflower couple blackmail him to steal some of the works of Leonardo da Vinci. If he refuses, they threaten to kill his friend Tommy.",
        "plotAuthor": { "name": "Harald Mayr", "link": "https://www.imdb.com/search/title/?plot_author=harald%20mayr%20%3Cmarvin@bike.augusta.de%3E&sort=alpha,asc" },
        "trailerId": "vi2224029977",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzhlN2Q1MTktZGU3Yi00Y2Q2LTliZmYtNWQ0NTEzOTAyMTQ2XkEyXkFqcGdeQXVyNjkwOTQ4MDE@._V1_FMjpg_UY720_.jpg"
    },
    {
        "id": "tt0421073",
        "title": "Street Kings",
        "release": { "year": "2008" },
        "genre": ["Action", "Thriller"],
        "director": "David Ayer",
        "mainCast": [
            {
                "name": "Keanu Reeves",
                "photo": "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_QL75_UX140_CR0,1,140,207_.jpg"
            },
            {
                "name": "Forest Whitaker",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTQzMDI3NTg2OV5BMl5BanBnXkFtZTcwNTgwMzg5Mg@@._V1_QL75_UY207_CR9,0,140,207_.jpg"
            },
            {
                "name": "Hugh Laurie",
                "photo": "https://m.media-amazon.com/images/M/MV5BNDYzNjAzMTYwOF5BMl5BanBnXkFtZTcwMTc3NTcxOA@@._V1_QL75_UY207_CR11,0,140,207_.jpg"
            }],
        "plot": "LAPD detective Tom Ludlow is a ruthlessly efficient, unorthodox undercover cop. Captain Jack Wander always covers for Ludlow, as do even his somewhat jealous colleagues. After technically excessive violence against a vicious Korean gang during the liberation of kidnapped child sex slaves, Ludlow becomes the target of hotshot Internal Affairs captain James Biggs, who feels passed-over after Wander's promotion to chief. Ludlow's ex-patrol partner, Terrence Washington, sides with IA but is killed during a shop robbery in Ludlow's presence. Ludlow works his way through the twisted rungs of the police and the deadly streets of Los Angeles for answers that only lead to more questions.",
        "plotAuthor": { "name": "KGF Vissers (TC edit)", "link": "https://www.imdb.com/search/title/?plot_author=kgf%20vissers%20(tc%20edit)&sort=alpha,asc" },
        "trailerId": "vi1790050585",
        "poster": "https://m.media-amazon.com/images/M/MV5BNDkyMGMwNmEtOGQ3OC00Nzk3LTgyZTctMTkyYmEwOGVmODExXkEyXkFqcGdeQXVyNjk3NDczNTM@._V1_FMjpg_UY640_.jpg"
    },
    {
        "id": "tt0147800",
        "title": "10 Dinge, Die Ich An Dir Hasse",
        "release": { "year": "1999" },
        "genre": ["Comedy", "Romance"],
        "director": "Gil Junger",
        "mainCast": [
            {
                "name": "Heath Ledger",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_QL75_UX140_CR0,1,140,207_.jpg"
            },
            {
                "name": "Julia Stiles",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTgxNjUxNDk3MF5BMl5BanBnXkFtZTcwMzM0NjA0NA@@._V1_QL75_UX140_CR0,1,140,207_.jpg"
            },
            {
                "name": "Joseph Gordon-Levitt",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_QL75_UY207_CR2,0,140,207_.jpg"
            }],
        "plot": "Meet the Stratford sisters: pretty and popular Bianca, who has never had a date; and Kat, her older sibling, an ill-tempered harridan whose acerbic wit is matched only by her steadfast determination to alienate any guy who might be remotely interested in her. Unfortunately, strict rules in the Stratford household forbid Bianca from having a boyfriend until her odious sister has one of her own-a situation that seems highly improbable considering Kat is a social disaster. Bianca's desperation for romance turns into a convoluted scheme to match Kat with her male equivalent--a guy whose reputation is so infamous, Kat might rise to the challenge and find him worthy of her concealed charms. Mating mayhem ensues when Patrick Verona -- a sullen young man with a mysterious past -- is bribed by Bianca's wannabe boyfriend to woo and win Kat, in order to clear the way for Bianca to begin dating.",
        "plotAuthor": { "name": "Movie Buff;-)", "link": "https://www.imdb.com/search/title/?plot_author=movie%20buff;-)&sort=alpha,asc" },
        "trailerId": "vi3917792793",
        "poster": "https://m.media-amazon.com/images/M/MV5BOTY5NGEwZDgtZDVhZC00NjVhLTk1YjktODQ3NDBiZTU1MDIzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg"
    },
    {
        "id": "tt0081777",
        "title": "Xanadu",
        "release": { "year": "1980" },
        "genre": ["Music", "Musical", "Family", "Fantasy"],
        "director": "Robert Greenwald",
        "mainCast": [
            {
                "name": "Olivia Newton-John",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTk3ODEyODM4OV5BMl5BanBnXkFtZTcwMzM1Mzc1MQ@@._V1_QL75_UY207_CR1,0,140,207_.jpg"
            },
            {
                "name": "Gene Kelly",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTM3MzIyMDI5Ml5BMl5BanBnXkFtZTYwNzQ2MjU2._V1_QL75_UY207_CR5,0,140,207_.jpg"
            },
            {
                "name": "Michael Beck",
                "photo": "https://m.media-amazon.com/images/M/MV5BMjE1MzMxODg5MF5BMl5BanBnXkFtZTcwOTc4MjYwOA@@._V1_QL75_UX140_CR0,1,140,207_.jpg"
            }],
        "plot": "In Los Angeles, artist Sonny Malone reluctantly returns to his job at Airflow Records--doing poster-sized exact-as-possible renderings of album covers for on-site promotions--as he could not make a living as a freelance artist, where he could truly use his artistic vision. On his first day back at Airflow, he gets sidetracked by thoughts of a young woman who literally rollerskates into him. He's unaware that their initial encounter and subsequent encounters are not accident: she is Kira, a muse who was awakened by his lamentations about his art and sent to help him achieve his artistic vision. Later that day he meets aging Danny McGuire, a former big-band musician turned construction-company owner who wants to return to his roots by owning a live music venue. This meeting too is no accident; Sonny soon discovers that Kira was part of Danny's past. Sonny and Danny achieving their dreams is threatened by Kira knowingly breaking the rules.",
        "plotAuthor": { "name": "Huggo", "link": "https://www.imdb.com/search/title/?plot_author=huggo&sort=alpha,asc" },
        "trailerId": "vi3923902745",
        "poster": "https://m.media-amazon.com/images/M/MV5BYTlkNWQyMjAtZGE2Yi00YWU2LWI5N2EtOGIwYjJjOTkxNzNhXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY740_.jpg"
    },
    {
        "id": "tt0094012",
        "title": "Spaceballs",
        "release": { "year": "1987" },
        "genre": ["Comedy", "Adventure", "History", "War"],
        "director": "Mel Brooks",
        "mainCast": [
            {
                "name": "Mel Brooks",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTU2MzI5NjA1NV5BMl5BanBnXkFtZTgwMjEyNjQ0MTI@._V1_QL75_UX140_CR0,1,140,207_.jpg"
            },
            {
                "name": "John Candy",
                "photo": "https://m.media-amazon.com/images/M/MV5BMzQ3MzQzODUxMF5BMl5BanBnXkFtZTcwMjY5MTkyOA@@._V1_QL75_UX140_CR0,3,140,207_.jpg"
            },
            {
                "name": "Rick Moranis",
                "photo": "https://m.media-amazon.com/images/M/MV5BMTY5MTM4NTY0OF5BMl5BanBnXkFtZTcwMjA0NTgwMw@@._V1_QL75_UY207_CR29,0,140,207_.jpg"
            }],
        "plot": "Planet Spaceball, homeworld of the evil Spaceballs is running out of air and the planet's leader President Skroob has devised an evil scheme, where he plans to steal the air from the atmosphere of the peaceful planet Druidia. But Druidia is surrounded by a defense shield to prevent the Spaceballs from stealing the air. When Druidia's ruler King Roland's beautiful daughter Princess Vespa and her loyal droid Dot Matrix flee from Druidia during her wedding to Prince Valium, the evil commander of the Spaceball fleet, Dark Helmet captures Princess Vespa, so King Roland will be forced to give them the access code to the defense shield. But heroic space pilot Lone Starr and his sidekick, Barf (a Mawg, half-man and half-dog) comes to Princess Vespa's rescue. With help from Yogurt, wise and powerful master of the magic ring 'The Schwartz', Lone Starr, Barf, Dot Matrix, and Princess Vespa set out to save Druida and foil Dark Helmet and President Scroob's scheme and prevent them from stealing the air from Druidia.",
        "plotAuthor": { "name": "Daniel Williamson", "link": "https://www.imdb.com/search/title/?plot_author=daniel%20williamson&sort=alpha,asc" },
        "trailerId": "vi2559229721",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzhiODlkZTctMDUxOC00Mjg4LWIzNWMtZjIzMmEzNmYyOWYwXkEyXkFqcGdeQXVyNjkwOTQ4MDE@._V1_FMjpg_UY720_.jpg"
    }];

export default testMovies;