// --- MOVIE DATABASE ---
// Top 50 Public Domain Movies (Open Source)
// These links are from the Internet Archive (archive.org) and are free to stream.

const movieData = [
    {
        name: "Top Gun: Maverick",
        poster: "https://dn721909.ca.archive.org/0/items/top-gun-maverick-official-trailer/TopGunMaverick_OfficialTrailer_IMAX_4K_IMAX5_Image.png",
        link: "https://ia801508.us.archive.org/6/items/top-gun-maverick-official-trailer/TopGunMaverick_OfficialTrailer_IMAX_4K_IMAX5_prores.mp4"
    },
    {
        name: "Charade",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Charade_%281963%29_poster.jpg/440px-Charade_%281963%29_poster.jpg",
        link: "https://archive.org/download/Charade1963/Charade1963.mp4"
    },
    {
        name: "His Girl Friday",
        poster: "https://upload.wikimedia.org/wikipedia/commons/0/08/His_Girl_Friday_poster.jpg",
        link: "https://archive.org/download/his_girl_friday_1940/his_girl_friday_1940.mp4"
    },
    {
        name: "The General",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_General_%281926%29_poster.jpg/440px-The_General_%281926%29_poster.jpg",
        link: "https://archive.org/download/TheGeneral_101/TheGeneral.mp4"
    },
    {
        name: "House on Haunted Hill",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/House_on_haunted_hill_poster.jpg/440px-House_on_haunted_hill_poster.jpg",
        link: "https://archive.org/download/house_on_haunted_hill_1959/house_on_haunted_hill_1959.mp4"
    },
    {
        name: "Carnival of Souls",
        poster: "https://upload.wikimedia.org/wikipedia/commons/8/87/Carnival_of_Souls_1962.jpg",
        link: "https://archive.org/download/Carnival_of_Souls_1962/Carnival_of_Souls_1962.mp4"
    },
    {
        name: "Little Shop of Horrors",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Little_Shop_of_Horrors_%281960%29_poster.jpg/440px-Little_Shop_of_Horrors_%281960%29_poster.jpg",
        link: "https://archive.org/download/TheLittleShopOfHorrors1960_892/The%20Little%20Shop%20of%20Horrors%20%281960%29.mp4"
    },
    {
        name: "Plan 9 from Outer Space",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Plan_9_Alternative_poster.jpg/440px-Plan_9_Alternative_poster.jpg",
        link: "https://archive.org/download/Plan_9_from_Outer_Space_1959/Plan_9_from_Outer_Space_1959.mp4"
    },
    {
        name: "Nosferatu",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nosferatu_poster.jpg/440px-Nosferatu_poster.jpg",
        link: "https://archive.org/download/Nosferatu_1922_201905/Nosferatu_1922.mp4"
    },
    {
        name: "Gulliver's Travels",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gullivers_Travels_%281939%29_poster.jpg/440px-Gullivers_Travels_%281939%29_poster.jpg",
        link: "https://archive.org/download/gullivers_travels1939/gullivers_travels1939.mp4"
    },
    {
        name: "The Man with the Golden Arm",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Man_with_the_Golden_Arm_poster.jpg/440px-Man_with_the_Golden_Arm_poster.jpg",
        link: "https://archive.org/download/man_with_the_golden_arm/man_with_the_golden_arm.mp4"
    },
    {
        name: "D.O.A.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/D.O.A._%281950%29_poster.jpg/440px-D.O.A._%281950%29_poster.jpg",
        link: "https://archive.org/download/doa_1950/doa_1950.mp4"
    },
    {
        name: "Detour",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Detour_%281945%29_poster.jpg/440px-Detour_%281945%29_poster.jpg",
        link: "https://archive.org/download/Detour_1945/Detour_1945.mp4"
    },
    {
        name: "The Stranger",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/The_Stranger_%281946%29_poster.jpg/440px-The_Stranger_%281946%29_poster.jpg",
        link: "https://archive.org/download/the_stranger_1946/the_stranger_1946.mp4"
    },
    {
        name: "The Hitch-Hiker",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Hitch-Hiker_%281953%29_poster.jpg/440px-The_Hitch-Hiker_%281953%29_poster.jpg",
        link: "https://archive.org/download/the_hitch_hiker/the_hitch_hiker.mp4"
    },
    {
        name: "Teenagers from Outer Space",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Teenagers_from_Outer_Space_poster.jpg/440px-Teenagers_from_Outer_Space_poster.jpg",
        link: "https://archive.org/download/teenagers_from_outer_space_1959/teenagers_from_outer_space_1959.mp4"
    },
    {
        name: "The Last Man on Earth",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/The_Last_Man_on_Earth_%281964%29_poster.jpg/440px-The_Last_Man_on_Earth_%281964%29_poster.jpg",
        link: "https://archive.org/download/the_last_man_on_earth/the_last_man_on_earth.mp4"
    },
    {
        name: "Cyrano de Bergerac",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cyrano_de_Bergerac_%281950%29_poster.jpg/440px-Cyrano_de_Bergerac_%281950%29_poster.jpg",
        link: "https://archive.org/download/cyrano_de_bergerac_1950/cyrano_de_bergerac_1950.mp4"
    },
    {
        name: "The 39 Steps",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/The_39_Steps_%281935%29_poster.jpg/440px-The_39_Steps_%281935%29_poster.jpg",
        link: "https://archive.org/download/The39Steps1935_201905/The39Steps1935.mp4"
    },
    {
        name: "Lady Frankenstein",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lady_Frankenstein_%281971%29_poster.jpg/440px-Lady_Frankenstein_%281971%29_poster.jpg",
        link: "https://archive.org/download/LadyFrankenstein1971/LadyFrankenstein1971.mp4"
    },
    {
        name: "McLintock!",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/McLintock%21_%281963%29_poster.jpg/440px-McLintock%21_%281963%29_poster.jpg",
        link: "https://archive.org/download/mclintock_1963/mclintock_1963.mp4"
    },
    {
        name: "My Man Godfrey",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/My_Man_Godfrey_%281936%29_poster.jpg/440px-My_Man_Godfrey_%281936%29_poster.jpg",
        link: "https://archive.org/download/my_man_godfrey_1936/my_man_godfrey_1936.mp4"
    },
    {
        name: "The Gold Rush",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/The_Gold_Rush_%281925%29_poster.jpg/440px-The_Gold_Rush_%281925%29_poster.jpg",
        link: "https://archive.org/download/TheGoldRush_201605/TheGoldRush.mp4"
    },
    {
        name: "Penny Serenade",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Penny_Serenade_%281941%29_poster.jpg/440px-Penny_Serenade_%281941%29_poster.jpg",
        link: "https://archive.org/download/penny_serenade/penny_serenade.mp4"
    },
    {
        name: "Royal Wedding",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Royal_Wedding_%281951%29_poster.jpg/440px-Royal_Wedding_%281951%29_poster.jpg",
        link: "https://archive.org/download/royal_wedding_1951/royal_wedding_1951.mp4"
    },
    {
        name: "Sherlock Jr.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sherlock_Jr._%281924%29_poster.jpg/440px-Sherlock_Jr._%281924%29_poster.jpg",
        link: "https://archive.org/download/sherlock_jr_1924/sherlock_jr_1924.mp4"
    },
    {
        name: "The Kid",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/The_Kid_%281921%29_poster.jpg/440px-The_Kid_%281921%29_poster.jpg",
        link: "https://archive.org/download/TheKid1921_201905/TheKid1921.mp4"
    },
    {
        name: "One-Eyed Jacks",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/One-Eyed_Jacks_%281961%29_poster.jpg/440px-One-Eyed_Jacks_%281961%29_poster.jpg",
        link: "https://archive.org/download/OneEyedJacks/OneEyedJacks.mp4"
    },
    {
        name: "Santa Claus Conquers the Martians",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Santa_Claus_Conquers_the_Martians_%281964%29_poster.jpg/440px-Santa_Claus_Conquers_the_Martians_%281964%29_poster.jpg",
        link: "https://archive.org/download/santa_claus_conquers_the_martians_1964/santa_claus_conquers_the_martians_1964.mp4"
    },
    {
        name: "The Brain That Wouldn't Die",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/The_Brain_That_Wouldn%27t_Die_%281962%29_poster.jpg/440px-The_Brain_That_Wouldn%27t_Die_%281962%29_poster.jpg",
        link: "https://archive.org/download/the_brain_that_wouldnt_die/the_brain_that_wouldnt_die.mp4"
    },
    {
        name: "Reefer Madness",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Reefer_Madness_%281936%29_poster.jpg/440px-Reefer_Madness_%281936%29_poster.jpg",
        link: "https://archive.org/download/reefer_madness_1938/reefer_madness_1938.mp4"
    },
    {
        name: "Africa Screams",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Africa_Screams_%281949%29_poster.jpg/440px-Africa_Screams_%281949%29_poster.jpg",
        link: "https://archive.org/download/africa_screams/africa_screams.mp4"
    },
    {
        name: "A Star Is Born (1937)",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/A_Star_Is_Born_%281937%29_poster.jpg/440px-A_Star_Is_Born_%281937%29_poster.jpg",
        link: "https://archive.org/download/AStarIsBorn1937_201905/AStarIsBorn1937.mp4"
    },
    {
        name: "Meet John Doe",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Meet_John_Doe_%281941%29_poster.jpg/440px-Meet_John_Doe_%281941%29_poster.jpg",
        link: "https://archive.org/download/meet_john_doe/meet_john_doe.mp4"
    },
    {
        name: "Angel and the Badman",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Angel_and_the_Badman_%281947%29_poster.jpg/440px-Angel_and_the_Badman_%281947%29_poster.jpg",
        link: "https://archive.org/download/angel_and_the_badman/angel_and_the_badman.mp4"
    },
    {
        name: "The Phantom of the Opera",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/The_Phantom_of_the_Opera_%281925%29_poster.jpg/440px-The_Phantom_of_the_Opera_%281925%29_poster.jpg",
        link: "https://archive.org/download/ThePhantomOfTheOpera1925/ThePhantomOfTheOpera1925.mp4"
    },
    {
        name: "Beat the Devil",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Beat_the_Devil_%281953%29_poster.jpg/440px-Beat_the_Devil_%281953%29_poster.jpg",
        link: "https://archive.org/download/beat_the_devil/beat_the_devil.mp4"
    },
    {
        name: "Kansas City Confidential",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kansas_City_Confidential_%281952%29_poster.jpg/440px-Kansas_City_Confidential_%281952%29_poster.jpg",
        link: "https://archive.org/download/kansas_city_confidential/kansas_city_confidential.mp4"
    },
    {
        name: "Suddenly",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Suddenly_%281954%29_poster.jpg/440px-Suddenly_%281954%29_poster.jpg",
        link: "https://archive.org/download/suddenly_1954/suddenly_1954.mp4"
    },
    {
        name: "The Red House",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/The_Red_House_%281947%29_poster.jpg/440px-The_Red_House_%281947%29_poster.jpg",
        link: "https://archive.org/download/the_red_house/the_red_house.mp4"
    },
    {
        name: "Scarlet Street",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Scarlet_Street_%281945%29_poster.jpg/440px-Scarlet_Street_%281945%29_poster.jpg",
        link: "https://archive.org/download/scarlet_street/scarlet_street.mp4"
    },
    {
        name: "The Bat",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Bat_%281959%29_poster.jpg/440px-The_Bat_%281959%29_poster.jpg",
        link: "https://archive.org/download/the_bat/the_bat.mp4"
    },
    {
        name: "Indestructible Man",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Indestructible_Man_%281956%29_poster.jpg/440px-Indestructible_Man_%281956%29_poster.jpg",
        link: "https://archive.org/download/indestructible_man/indestructible_man.mp4"
    },
    {
        name: "Voodoo in Harlem",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Voodoo_in_Harlem_%281938%29_poster.jpg/440px-Voodoo_in_Harlem_%281938%29_poster.jpg",
        link: "https://archive.org/download/voodoo_in_harlem/voodoo_in_harlem.mp4"
    },
    {
        name: "Attack of the Giant Leeches",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Attack_of_the_Giant_Leeches_%281959%29_poster.jpg/440px-Attack_of_the_Giant_Leeches_%281959%29_poster.jpg",
        link: "https://archive.org/download/attack_of_the_giant_leeches/attack_of_the_giant_leeches.mp4"
    },
    {
        name: "Dementia 13",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dementia_13_%281963%29_poster.jpg/440px-Dementia_13_%281963%29_poster.jpg",
        link: "https://archive.org/download/dementia_13/dementia_13.mp4"
    },
    {
        name: "The Screaming Skull",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/The_Screaming_Skull_%281958%29_poster.jpg/440px-The_Screaming_Skull_%281958%29_poster.jpg",
        link: "https://archive.org/download/the_screaming_skull/the_screaming_skull.mp4"
    },
    {
        name: "White Zombie",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/White_Zombie_%281932%29_poster.jpg/440px-White_Zombie_%281932%29_poster.jpg",
        link: "https://archive.org/download/WhiteZombie/WhiteZombie.mp4"
    },
    {
        name: "The Last Time I Saw Paris",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/The_Last_Time_I_Saw_Paris_%281954%29_poster.jpg/440px-The_Last_Time_I_Saw_Paris_%281954%29_poster.jpg",
        link: "https://archive.org/download/the_last_time_i_saw_paris/the_last_time_i_saw_paris.mp4"
    },
    {
        name: "A Farewell to Arms",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/A_Farewell_to_Arms_%281932%29_poster.jpg/440px-A_Farewell_to_Arms_%281932%29_poster.jpg",
        link: "https://archive.org/download/a_farewell_to_arms/a_farewell_to_arms.mp4"
    }
];