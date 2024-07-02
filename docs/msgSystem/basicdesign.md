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






    