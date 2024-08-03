"Written by BadCodeL0cvst, whose designs are terrible and, when good or somehow thought out, already designed by other people"

### -- What is this document --
    This document will display thoughts and researches on how to construct 
    a database centered messaging system with the following design constraints:
        1. The database must be setup so user information sits on a single database
            while user messages and whatnot sits on another database with its own tables and stuff
        2. The system must always know what user is logged in and act accordingly at all times.
        3. The user must always be able to tell when the message was sent and to whom. 
        4. The user must always be able to know who sent him a message and when. 
    and the following optional constraints:
        1. The user may be able to send files of any kind.
            1.1. If file sharing is implemented, the system must never ever interact with these files,
                on the exception of interacting when making them available to the destination and the 
                sender.
        2. The user may be able to set up a display image and see other users display images.

### Constraint 1: Multiple database setup
    1. Reason for this constraint
        This will make things much more organized. As the messaging system is not the primary worry 
        of this kind of design (as we are not designing it for a dedicated messager), the message database
        will worry about optimizations of fetching user messages while the user database will worry about
        authenticating and displaying user information faster.

    2. Basic design
        From now on, we shall name 2 basic databases for this discussion:
            1. db1, where we'll store information such as username, passwords, path to user display images and such.
            2. db2, where it will be stored solely user messages sent to one another; files and text messages.

        db1 should have views on users and passwords. The application should never fetch all the information, only
        verifying specifically if the user info exists and is correct. In this database, a user should never have any access
        whatsoever to anything. Only the application (or system) will have an user. The sole purpose of this database is
        authenticating the user as fast as possible.
        
        db2 may be different in the access to information control. The user may have an access set up so he may use this specific
        database since he theoretically owns a part of its content. Information will always have two owners: sender and receiver. 
        Now comes the hard part: how the hell does one should store a conversation between human beings using text and what the bloody
        hell is the minimal metadata necessary? At the very very least, we would need:
            1. Sender
            2. Receiver
            3. Date of submition
            4. Content
        AAAnd what should this 'content' be? A string? Or any kind of file? We'll think about this later. The things above are messaging basics, 
        but the database would probably also need a primary key, which could be some kind of message id. But even a bigint would not come close to
        containing the amount of information 100 users may generate over time. And even if it could, it is simply not robust and certainly not organized
        enough to accomodate searching. Imagine having some servers with millions of messages. Someone comes around and wants to see all the messages they
        sent over the entire usage duration. That would take some time with a global message id. 
        I do believe the answer to be dynamic table generation. That could solve a lot. The weakest chain may be the answer to how many tables can the database manager
        hold at all times, of course. 
        As a newb in this kind of client-server programming, i have no fucking idea how to solve any of this bullshit :>

### Constraint 2: User authentication
    1. Reasoning
        The system must and will always know at all times what user is using the app.
        Else, we can't direct the messages to the correct user. Theoretically, it is possible
        to use a new table for every conversation. As long as we name it using some kind of 
        easy to access pattern and set users in the database with the correct patterns, 
        the system should be able to find it no problem.

    2. Basic Design 
        2.1. Idea -> telegram style setup
            The database should have tables for every two or more user conversation and the table 
            name would rely on simple types. There might be groups to exchange messages, though it is 
            not the focus nor the purpose of this system, therefore, one could simply not wander this 
            way.

            The table naming though could be very secure, but solving for multiple users would be a great,
            very great pain.
    
### Constraints 3 & 4: User knowledge
    1. Reasoning
        This is a must. The user would find great benefits to knowing when and who received his message, as 
        well as who the hell is sending him messages, specially considering this system is currently being designed for a renting site.
    
    2. Basic Design
        This should be as simple as setting the ownership of conversations and attributes for the entities. One
        of the most annoying things of any kind of system is when a non-critical information is being stored,
        is relevant to the user and the setup refuses to display it without some kind of roundabout esoteric route and configuration.
        Whenever a user sends a message, the system must know the receiver, time, owner and content. This theoretically should allow for even a binary to be sent without major stress, as js already sends   






    