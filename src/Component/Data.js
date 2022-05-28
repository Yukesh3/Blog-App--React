import React, { createContext, useState } from "react";

export const BlogContent = createContext();

const Data = (props) => {
    const [kollywood, setKollywood] = useState([
        {
            "Title": " Suriya and Soorarai Pottru win at Indian Film Festival of Melbourne",
            "CategoryName": "Kollywood",
            "PublishedDate": "May 15 2022",
            "ImageAsset": "https://wallpapercave.com/wp/wp5711421.png",
            "BlogContent": "Soorarai Pottru has won the Best film award at Indian Film Festival of Melbourne.Suriya, on his part thanked his fans and Soorarai Pottru director Sudha Kongara, saying, “I’m sure all the nominees have given their best. This film is very special, and this is the first award I’m getting for this film. Thanks to all the fans who have given us so much love. In my career, I felt bored with what I was doing after having worked for 20 years. So thanks to my director Sudha — this film was her 10 years dream — she worked four years on writing or his film. The character of Maara will not be anything without her. I couldn’t ask for more.”",
            "Likes0": "1000K"
        },
        {
            "Title": "Kamal Haasan Starrer VIKRAM Hindi Trailer Out Now! ",
            "CategoryName": "Kollywood",
            "PublishedDate": "May 14 2022",
            "ImageAsset": "https://wallpapercave.com/wp/wp11049932.jpg",
            "BlogContent": "The upcoming Tamil action film ‘Vikram’ which is directed by Lokesh Kanagraj is gearing up for its release on June 3.Vikram is an upcoming Indian Tamil language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International. The film stars Kamal Haasan, Vijay Sethupathi and Fahadh Faasil with Kalidas Jayaram, Narain, Antony Varghese and Arjun Das in supporting roles.When Vikram's teaser was announced in 2020, it had the words,Once upon a time, there lived a ghost named Vikram.The teaser was a major hit and since then, expectations surrounding the film have been growing multifold.The trailer of Vikram was unveiled on May 15. The trailer is narrated by Kamal Haasan, who calls himself a deer, while he compares Vijay Sethupathi and Fahadh Faasil to a Lion and Tiger, respectively. The trailer has clocked in over 16 crore views on YouTube and is still going strong.",
            "Likes": "900"
        },
        {
            "Title": " Aishwarya Rai Bachchan on Mani Ratnam's 'Ponniyin Selvan':",
            "CategoryName": "Kollywood",
            "PublishedDate": "May 15 2022",
            "ImageAsset": "https://www.linkpicture.com/q/i0_wp_com-Ponniyin-Selvan-Movie-HD-Posters-6.png",
            "BlogContent": "Aishwarya Rai also added that the movie is Mani Ratnam’s dream and she feels blessed to be part of the project.Aishwarya Rai who is currently shaking the internet with her red carpet look at the 75 th Cannes International Film Festival reportedly spoke about working with director Mani Ratnam for ‘Ponniyin Selvan’. Aishwarya Rai has already worked with Mani Ratnam for ‘Iruvar’ and ‘Raavanan’. Stating that ‘Ponniyin Selvan’ was a dream project, the actress reportedly said that she was privileged to be part of it. Aishwarya Rai also added that the movie is Mani Ratnam’s dream and she feels blessed to be part of the project.",
            "Likes": "8000K"
        },
        {
            "Title": " KGF 2 box office collection: creates new records in Karnataka and Tamil Nadu",
            "CategoryName": "Kollywood",
            "PublishedDate": "May 13 2022",
            "ImageAsset": "https://pbs.twimg.com/media/EMT-IugUUAAAeoF?format=jpg&name=large",
            "BlogContent": "KGF 2 is holding its ground well against Marvel’s Doctor Strange in the Multiverse of Madness at the box office in India. The global collection of the movie now stands over Rs 1100 crore.KGF Chapter Collection: After a long wait, the KGF Chapter 2 has finally been released on the silver screens on 14th April 2022. It is a period-action Kannada film. The film has created excitement from its first part only which was released in 2018. After 4 years, the producers have finally released it. There is no confusion that the film has marked its success on its first day only. The film took the box office by storm and created a huge profit on its first day. KGF Chapter 2 is the most expensive movie in Kannada till now.",
            "Likes": "900"
        },
        {
            "Title": " #AK61: Manju Warrier pairs up with Ajith",
            "CategoryName": "Kollywood",
            "PublishedDate": "May 15 2022",
            "ImageAsset": "https://igimages.gumlet.io/tamil/home/thala61-title432022m.jpg?w=376&dpr=2.6",
            "BlogContent": "Manju Warrier will be playing Ajith’s pair in the film. Vinoth wanted a fresh combo for this film, and he was the one who felt Manju Warrier would be apt.",
            "Likes": "800"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title": " Sony And Microsoft Are Planning To Launch A New PS5 Pro And XBOX ",
            "CategoryName": "Technology",
            "PublishedDate": "Januaury 15 2022",
            "ImageAsset": "https://wallpapercave.com/wp/wp7003479.png",

            "BlogContent": "Now, a couple of major manufacturers have all but confirmed that the two gaming giants are working on the next generation of their gaming consoles. The new versions of these consoles are expected to come with a significant performance and graphics boost. AMD who makes the processors for both the PS5 as well as the Xbox Series X recently started hiring an SoC verification engineer for the next-gen RDNA family graphics which reportedly are meant for the new consoles. ",
            "Likes": "800"
        },
        {
            "Title": "Best Free VR Games to Play on Steam",
            "CategoryName": "Technology",
            "PublishedDate": "Januaury 10 2022",
            "ImageAsset": "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",


            "BlogContent": "VR is a developing industry that provides the players with next level immersion. With the introduction of Meta, VR is on track to becoming one of the most used pieces of tech in the world. Through VR players get the experience of actually being in a different world and experiencing the wonders of that world first hand. Many of the mechanics are still a work in progress but it provides the players with an unmatched experience. Check out IGN India's top picks for the best free VR games on Steam.",
            "Likes": "650"
        },
        {
            "Title": " Huawei launches Multi-service widgets smartwatch feature",

            "CategoryName": "Technology",
            "PublishedDate": "Januaury 12 2022",
            "ImageAsset": "https://wallpapercave.com/wp/wp8535379.jpg",
            "BlogContent": " Huawei has recently released a May 2022 update or Watch GT 3 smartwatch, the company has sent this update with new features and optimizations. However, there’s one specific feature – Multi-service widgets, that is amazing on its own and has different capabilities for Huawei Watch GT 3 users.The May 2022 update for Huawei Watch GT 3 comes with a new special multi-service widgets watch face that offers different styles in one place. According to the information shared by Huaweiblog, you can open a specific feature directly from the widget without the need to open the menu first.",

            "Likes": "700"
        },
        {
            "Title": " Apple Documents Reveal Futuristic MacBook Plans",
            "CategoryName": "Technology",
            "PublishedDate": "Januaury 14 2022",
            "ImageAsset": "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",

            "BlogContent": "Apple’s MacBook Air and MacBook Pro laptops have ripped up the form book on benchmarking when they were launched in 2020 but they rarely started away from a traditional laptop design. In fact, they were almost identical to the Intel-based laptops that hadn’t changed since 2016. New documents from Apple suggest that the MacBook team are working on some radical ideas for future macOS laptops.",
            "Likes": "900"
        },
        {
            "Title": " Robots serve food in new multi-cuisine restaurant in Noida",

            "CategoryName": "Technology",
            "PublishedDate": "Januaury 12 2022",
            "ImageAsset": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
            "BlogContent": "Robotics seems to be the future of the hospitality industry and while we recently did a story on how Artificial Intelligence (AI) is changing the whole scenario, this new restaurant in Noida has made it a reality. Well, The Yellow House - Robot restaurant based in sector 104 Noida is using robots to serve food to its customers. The restaurant has taken the social distancing rule quite seriously and is using these robo-waiters to win over their customer.",

            "Likes": "422"
        }
    ]);

    const [hollywood, setHollywood] = useState([
        {
            "Title": " Spider-Man: No Way Home Fan Art Imagines Daredevil Team Up",
            "CategoryName": "Hollywood",
            "PublishedDate": "Januaury 15 2022",
            "ImageAsset": "https://wallpaperaccess.com/full/895181.jpg",
            "BlogContent": "Spider-Man: No Way Home had a ton of surprises the filled almost every Marvel Studios fan with glee. The film brought back Andrew Garfield.Spider-Man: No Way Home had a ton of surprises that filled almost every Marvel Studios fan with glee. The film brought back Andrew Garfield and Tobey Maguire back as Peter Parker/Spider-Man and it was spectacular to see them team up with Tom Holland. One other surprise the film gave us was the reintroduction of Charlie Cox as Matt Murdock/Daredevil. Even though he didn't suit up as the vigilante and team-up with Spider-Man, his cameo was one of the highlights of the film. One fan thinks that they should have given us a peak at the film version of the Daredevil costume and has even taken the liberty of designing his own interpretation. ",
            "Likes": "800"
        },
        {
            "Title": "Avatar The Way Of The Water trailer is out. The James Cameron directorial will arrive in cinemas on December 16.",
            "CategoryName": "Hollywood",
            "PublishedDate": "Januaury 14 2022",
            "ImageAsset": "https://wallpapercave.com/wp/wp8213727.jpg",
            "BlogContent": "Avatar The Way of Water trailer: James Cameron promises a visually stunning family saga. Avatar: The Way of Water, the film will be released later this year. The first footage from the long-awaited sequel was screened at CinemaCon showcase in Las Vegas on April 27. And now, the trailer of the movie has been released online.The footage gives fans a glimpse of the visually stunning landscapes of Pandora, an Earth-like habitable extrasolar moon of the gas giant Polyphemus from the Alpha Centauri system, which was also the setting of the original film. There are many shots in which the ocean or water plays a pivotal part. ",
            "Likes": "800K"
        },
        {
            "Title": " Johnny Depp transforms into Captain Jack Sparrow for delighted fans outside courthouse, says 'he's still around'.",
            "CategoryName": "Hollywood",
            "PublishedDate": "Aug 21 2022",
            "ImageAsset": "https://wallpaperaccess.com/full/1103987.jpg",
            "BlogContent": "Johnny Depp turned back the clock and transformed into Captain Jack Sparrow, his popular character, for some fans who waited for him outside the Virginia courthouse, where he is battling Amber Heard in a defamation case.ByHT Entertainment Desk Johnny Depp may have said that he would not return to his iconic role of Captain Jack Sparrow in Pirates of the Caribbean for “$300 million and a million alpacas”, but he got back in the skin of the character briefly. To fans’ disappointment, it wasn’t on a film set though. Johnny briefly delighted some fans as he rolled back the clock and transformed into Captain Jack outside the Virginia courthouse, where he is currently fighting a multimillion-dollar defamation trial against ex-wife, actor Amber Heard.",
            "Likes": "2M"
        },
        {
            "Title": " Top Gun 2 tipped to be Tom Cruise’s career-best opener with $125 million weekend",
            "CategoryName": "Hollywood",
            "PublishedDate": "Januaury 14 2021",
            "ImageAsset": "http://m.gettywallpapers.com/wp-content/uploads/2021/09/Top-Gun-Maverick-Wallpapers-1536x864.jpg",
            "BlogContent": "Tom Cruise's Top Gun Maverick has been projected to earn $125 million in its opening weekend, which will comfortably make it he best opener in the actor's long career.As per trade reports, Tom Cruise’s upcoming film Top Gun: Maverick could end up registering the biggest opening by any film of his career. Despite his stardom, Tom has never had a film gross over $100 million on the opening weekend. But reports say that Maverick may just change that. Some estimates claim that the film could end up making $125 million in its opening weekend in the domestic market alone. Also read: Top Gun Maverick early reviews: Critics hail Tom Cruise-starrer as ‘great film’According to a report in The Hollywood Reporter, “Top Gun 2 is easily headed for the biggest opening of Tom Cruise’s career at the domestic box office, with a four-day gross of at least $92 million, according to official tracking. ",
            "Likes": "800K"
        },
        {
            "Title": " The Gray Man trailer: Chris Evans and Ryan Gosling face off, Dhanush appears too",
            "CategoryName": "Hollywood",
            "PublishedDate": "Januaury 15 2022",
            "ImageAsset": "https://www.joblo.com/wp-content/uploads/2022/05/the-gray-man-netflix-prequel-sequel.jpg",
            "BlogContent": "The Gray Man trailer: Ryan Gosling and Chris Evans fight each other; Dhanush is also seen in an action scene as he makes an appearance. Fans say they will watch the movie ‘only for Dhanush'.The much-anticipated trailer of actor Dhanush’s upcoming Hollywood debut The Gray Man was unveiled on Tuesday, May 24. The film stars Ryan Gosling, Chris Evans, and Ana de Armas in the lead roles, while Dhanush has been roped in for a significant role. Ahead of the trailer launch on May 24, posters of the actors were released online by Netflix. Dhanush’s poster from the movie was widely circulated online. Dhanush shared the trailer on his social media profile on May 24. The Gray Man revolves around freelance assassin and former CIA operative Court Gentry, played by Ryan Gosling. It is reported that the film is based on Mark Greaney's 2009 novel of the same name. The trailer sets the tone for a gripping action drama.",
            "Likes": "1M"
        }

    ]);

    const [fitness, setFitness] = useState([
        {
            "Title": " This Mobility Workout Will Improve Your Range Of Motion And Help Nix Aches And Pains",
            "CategoryName": "Fitness",
            "PublishedDate": "Januaury 14 2022",
            "ImageAsset": "https://images.pexels.com/photos/374694/pexels-photo-374694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "Flexibility means the body can achieve a certain position, says certified strength and conditioning specialist India McPeak. Think of flexibility as a passive range of motion, like lengthening your muscles in a static stretch. Stability, on the other hand, is the ability to maintain a desired position or movement, explains McPeak. Think of stability like holding a plank steady, maintaining a hip bridge, or balancing on one foot.Now that you know mobility is clutch, here's how to measure yours, a complete workout to boost mobility, and all the benefits you'll gain according to trainers",
            "Likes": "800K"
        },
        {
            "Title": " Jogging Is Making a Comeback Right Now—And We Are So Here for It",
            "CategoryName": "Fitness",
            "PublishedDate": "Januaury 16 2022",
            "ImageAsset": "https://images.pexels.com/photos/5038818/pexels-photo-5038818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "Parts of this emerging running culture harken back to the running boom of the 1970s, when for the first time, average people were running casually en masse. Or, as many called it back then, jogging.But soon after jogging came into style in the '70s—replete with pastel shorts and matching sweatbands—the term “jogger” began to turn derogatory, thanks at least in part to serious runners who felt the need to distinguish themselves from the new swarms of recreational ones.“Somewhere along the line, ‘jogger’ became pejorative,” says Mark Remy, a former Runner’s World editor and the founder of dumbrunner.com. ",
            "Likes": "1M+"
        },
        {
            "Title": " 6 benefits of cycling and why you need to add ​​​​it to your fitness regime",
            "CategoryName": "Fitness",
            "PublishedDate": "Januaury 12 2022",
            "ImageAsset": "https://images.pexels.com/photos/5851030/pexels-photo-5851030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "Cycling is a great way to burn calories in a low impact manner and it’s easy on the joints. For beginners, it can also help them strengthen their leg muscles and also work on overall cardiovascular health. I am a huge proponent of performing cardio in indirect forms such as cycling as it’s super fun. We should start slow and taper up as skills improve. We can also motivate our friends and family to use cycles instead of cars to save fuel, protect the environment and even improve our own health. Cycling is not the be all and end all when it comes to exercise, but it is a great way to make exercising efficient and fun!” states Yash Vardhan Swami, health and fitness expert.",
            "Likes": "800K"
        },
        {
            "Title": " Yoga expert on 8 wonderful benefits of morning meditation",
            "CategoryName": "Fitness",
            "PublishedDate": "Januaury 15 2022",
            "ImageAsset": "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "Morning is considered the most productive, energetic and positive time of the day as one is usually fresh after a good night's sleep. Setting a morning routine not only helps you structure your day better but also contribute to your overall well-being. It's true that the first thing you do after waking up can define the rest of your day. Experts say checking phone or emails right early morning can trigger a stress response while a bit of self care at the start of the day could bring many benefits. While most of us have hectic routines, one doesn't need more than 5-10 minutes to set the correct tone for the day and meditation can be one of the effective practices that may help you achieve that..",
            "Likes": "1M"
        },
        {
            "Title": "Strong legs help power summer activities: Hiking, biking, swimming, and more",
            "CategoryName": "Fitness",
            "PublishedDate": "Januaury 15 2021",
            "ImageAsset": "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": " summer activities officially kick in when the calendar flips to May. It's prime time for open water swimming, running, cycling, hiking, and anything else that gets me outside and moving. Yet, my first step is to get my legs in shape.Legs are the foundation for most activities, says Vijay Daryanani, a physical therapist at Harvard-affiliated Spaulding Rehabilitation Hospital. They're home to some of the body’s largest muscles, and building healthy legs can improve one’s performance, reduce injury, and increase endurance.",
            "Likes": "800K"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title": " 5 Best Fast Food Burgers for Weight Loss, Says Dietitian    ",
            "CategoryName": "Food",
            "PublishedDate": "Aug 21 2021",
            "ImageAsset": "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "Weight loss can be taxing on the body and the mind due to prolonged restriction. If you are struggling with feeling satisfied while also working on weight loss, you might consider including your favorite foods more frequently. In fact, research shows that the more often you include foods you enjoy, the more likely you are to stick with your diet plan.When working on weight loss, think of calories as your daily allotted budget. As long as you spend mindfully, you can make just about any food work.We have compiled a list of the most calorie-conscious burgers so that you can find ways to include your favorite fast food no matter your diet plan!",
            "Likes": "500k+"
        },
        {
            "Title": " Amazing Health Benefits of Mango, king of fruits",
            "CategoryName": "Food",
            "PublishedDate": "Januaury 14 2022",
            "ImageAsset": "https://images.pexels.com/photos/5875696/pexels-photo-5875696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "Both doctors and nutritionists recommend eating seasonal fruits to get different types of essential nutrients. Mango is a summer special fruit that carries a number of benefits with itself. Mangoes are packed with Vitamins like C, A, E, B5, K, B6 and nutrients like copper, folate, potassium, magnesium, manganese, fibre and many more. They aid digestion, boost immunity, lower cholesterol levels improve eye health and even support heart health.The best way to eat a mango is to have it raw instead of using it in recipes. Taking account of the quantity is much easier when you eat it raw, this makes the task of calorie-counting easier. Usually, mangoes are used in large quantities in recipes like mango shakes, aamras, puddings, cakes etc. ",
            "Likes": "1M+"
        },
        {
            "Title": " KFC worker shares how they actually make the 'perfect' fried chicken - 'It's insane!'    ",
            "CategoryName": "Food",
            "PublishedDate": "Januaury 16 2022",
            "ImageAsset": "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "KFC, founded by Colonel Harland Sanders in 1952, makes perfect golden crispy chicken across its 1,000 restaurants in the UK and Ireland. But how do they do it? The restaurant's food manager in the UK told Alexis that no one actually knows the exact recipe as it is kept in a vault in Kentucky.Therefore, no KFC worker knows how the fried chicken is actually made.",
            "Likes": "400K"
        },
        {
            "Title": " Kids will love the delicious cake pops, very easy to make",
            "CategoryName": "Food",
            "PublishedDate": "Januaury 16 2022",
            "ImageAsset": "https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "BlogContent": "Method of making Delicious Cake Pops - To make this, first take a vessel. Now clean it thoroughly. You wipe it with a cloth. After that, after applying butter in it, take a cake base and crush it. Now put chocolate sauce in it and give it a ball shape. Now roll in melted chocolate. After this, you bake in the microwave at 180 to 35 degrees. Now put sprinkles on top. Here it is ready for you to make Lalliz Cake Pops. Serve it now. We are sure that it will be liked by everyone in your house, be it your children or guests.",
            "Likes": "1M+"
        },
        {
            "Title": " High Protein Breakfast: 5 South Indian Recipes For A Protein Rich Breakfast",
            "CategoryName": "Food",
            "PublishedDate": "Januaury 16 2022",
            "ImageAsset": "https://wallpapercave.com/wp/wp6734913.jpg",
            "BlogContent": "Think of a light, wholesome and satisfying meal, South Indian cuisine would probably be the first cuisine that comes to the mind. From light idli-sambhar to wholesome dosa and uttapam, south Indian cuisine has a vast repertoire of delicacies to offer. Be it for dinner, lunch or breakfast, this classic cuisine is apt for every meal. While speaking about breakfast, all we want is something filling, quick and delicious (obviously) and we believe there's nothing better than a hearty South Indian meal to satisfy our morning breakfast needs. Aromatic curry leaves cracking with mustard seeds over a piping hot South Indian meal, just imagine how delicious the meal would be. If you love south Indian meals as much as we do, here we bring you a list of 5 power-packed and protein-rich south Indian recipes that are perfect to satiate your morning hunger.",
            "Likes": "708K"
        }
    ]);

    return (
        <BlogContent.Provider
            value={{
                value1: [kollywood, setKollywood],
                value2: [hollywood, setHollywood],
                value3: [technology, setTechnology],
                value4: [fitness, setFitness],
                value5: [food, setFood]
            }}>

            {props.children}
        </BlogContent.Provider>
    )
}

export default Data