# Squad8 Postmortem: a brief analisys on failure and theories on how to avoid failing twice this same way.

## Issue Summary
The Squad 8 failed to deliver a satisfactory product.

By failing to accomodate the time constraints and returning to work in the project after the end of the university strike, the squad 8 of the mds discipline was unable 
to achieve the desired results for this piece of software: a feature complete working renting application, able to connect, receive and send information to a database. 

## Timeline
> **22/03/24 :** The Squad was formed, consisting of 5 people: Bruno, Joao, Pedro, Renan and Ryan.
> 
> **28/03/24 :** It was decided the Squad would attempt to develop a renting app.
> 
> **01/04/24 :** The basic architecture and requirements were brought up. We would much later find out this architecture was flawed, the API was supposed to also contain the
webscrapper. We also divided the stacks and tasks between members, first focusing on learning the core technologies that would be used throughout the project. This elusive API
also never got close to be properly implemented nor completely or loosely understood.
> 
> **04/04/24 :** Github Actions was first brought up in this day. An informal ticket to implement this was posted in WhatsApp. This provides the first insight on what went wrong.
This would take as long as 4 months to implement somewhat properly, as there was no sense of urgency, since this was somewhat optional.
> 
> **06/04/24 :** One of the engineers tasked with developing the API learned html, which consumed precious time to learn API technologies. Even so, this would later help, as the engineer
tasked with building the front-end would leave the project later.
> 
> **08/04/24 :** The university strike was announced. At this point, most of the project was still in its early baby steps, but still had the possibility to be finished. Yet, the strike and the squad's decision to work only when the strike ended would prove to be a terrible idea.
> 
> **26/04/24 :** The frontend's first version was finished. While still mostly crude, it was a good beginning and we had theoretically had time to finish it.
> 
> **07/05/24 :** It came to the squad's knowledge that no further presentations would take place until the strike came to an end. Mostly no changes to the base project was done during this period.
> 
> **17/05/24 :** The lead frontend engineer left the project. With no one else fully capable of working with html and able to understand the designs, this was the first nail in the coffin. As most other disciplines were launching their final projects and tests during the following period, the remainder of the members felt more urgency to focus on the active disciplines. With rare exceptions, no meetings were held during the aforementioned period.
> 
> **01/07/24 :** After the strike was finally over, the database scripts were concluded, but the squad mostly had no idea on how to use or connect the database, along with mostly no idea on how to construct the api, which relied on the database for its operations. This would put another nail in the coffin.
> 
> **15/07/24 :** The squad decided to meet three times in a week to compensate for the lost time in the strike void. Though it initially worked as intended, forcing the engineers to interact and show precisely what was being done and what was not, the plan ultimately folded on itself. The engineers were unable to keep up with the meetings nor the required development pace to fix the product in time for delivery. Besides implementation of the react framework for the front end, until the deadline, no major changes were made to the main project. It completely stalled.
>
> **31/07/24 :** The merging of the react branch into the main was the last major change done to the project.
>
> **02/08/24 :** A somewhat functioning of CI was finally placed into main. At the same time, half of the team felt left out of the work and alienated from the project.
>
> **09/08/24 :** After asking for help with our mentor, an effort was put in motion to reintegrate this half again into the project. Though this proved to be much too late, as the integrated half was already burned out.
>
> **15/08/24 :** One of the lead React Engineers decided to left the project. This was the final nail in the coffin.

## Root Cause
A crisp lack of urgency, organization, workforce, communication and know-how made this project go six foot under. We will ask why these areas were lacking in order to try to pinpoint a root cause using the 5 why's system.

**1. Why was there no urgency?** - The schedules were constantly changing, which made it hard to predict when 
    exactly the squad was supposed to lock in or relax. 
    
**2. Why was there no organization?** - When the strike raged on for two months, enough time had passed without work that most members 
lost edge on the technology and were forced to spend time relearning in order to implement, which led to frustration and the eventual loss of 
another member due to sluggish progress and no hope of successfully delivering the product.

**3. Why was there no workforce?** - Already one of the smaller squads, the loss of the first engineer forced others to learn HTML and CSS
from scratch, which proved to be a single point of failure.

**4. Why less communication ensued?** - Initially during the strike, no actual communication was needed. When the strike ended, ensuing communication was met with dificulty.

**5. Why was there no know-how knowledge?** - The squad was already formed with no true veterans in any of the technologies which would be used, meaning
most of the learning would need to be built from scratch. This also concerns taking full advantage of the Agile Methodologies taught during lectures. The members
had most of its academic experience up to this point in solo projects and tests in the realm of software.

We may conclude the root cause of this death was an extended period of no work on the project, leading to a "rusting" of sorts. The strike was one of the major contributors to this condition, which lead to the halting of the work for the said extended period of time. 

## Resolution and recovery

No resolution nor recovery was achieved. The project remain unfinished as of the writing of this document and will remain so indefinitely.
The project may be finished after forking, but the current repo should remain as is to document this initial failure.

## Corrective and Preventative Measures
The remainders of the squad 8 analyses the following preventive measures to allow a better future project:
**1. There should be no sprint skipping whatsoever.** This messes up the flow of the project and catching up is much harder 
in practice than in theory.
**2. Communication should be, as XP ensures its much better, in person.** Working with other people is much easier in a physical environment 
rather than a virtual one. And, above all, **proper communication must be ensured;** guaranteed.
**3. Seeking help as soon as a roadblock is found** will be exponentially faster than fixing it alone. The team should work together to share
knowledge. This could avoid alienation and/or isolation of the workers.
**4. Using issues to track project needs** avoids the strange fenomenom where an engineer wants to help yet does not know where to. It's a powerful communication tool and should be used as such.

As corrective measures would involve finishing up the work started, they will not be cited.
