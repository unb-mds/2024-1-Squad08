[//]: #written by bcloc, whose api will crash and burn, most surely.

### What is this document?
    This documents seeks to plan how the api will function in this project,
    what it needs to do and how to seek knowledge in how to do it.

### Useful Links ->
    [1. Express documentation] (https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
        I very much like both the oficial documentation, but mozilla tends to be easier to follow. 
    [2. Some guy using express] (https://www.youtube.com/watch?v=ldYcgPKEZC8)
        The need for express api comes mostly from this dude. 
    [3. Serving images on express] (https://stackoverflow.com/questions/29920824/how-to-serve-images-in-nodejs-express)
        Will be most useful to avoid bizarre imports and stuff on the front end, also to actually serve those images
        on an orderly fashion.
    [4. Hoppscotch documentation] (https://docs.hoppscotch.io/)
        This i do believe will be useful for testing the API and stuff. 

### 0. Basic constrictions and needs
    1. The api system must be able to perform a login using the database data.
    2. The api must be able to return useful republic and user information.
    3. The api should be able to search through the database.
    4. The api must be able to register new data inside the database and receive image uploads from the user.

### 1. Login systems: why and (theoretically) how?
    Login systems are the basis to allow a user to interact with anything 
    useful on the site. Say, the user wants to rent some random place.
    Then, the system should be at the very least know who the hell is trying to rent.
    The same as trying to register something to be rented and stuff.

    User login is the most urgent and somehow the most complex of these, since it must
    be stored in a database, cookie or whatever if the user is logged, meaning we either 
    develop our own (might take a very bloody long time, time which we don't bloody have)
    or whore ourselves out to some random ass service to provide it (which we prolly don't
    have the money to pay for...)

    Anyway, this is something i do plan to simply delegate to some random ass service. It will
    most likely be far easier and faster. Might even be free.

    Here's a video I stumbled upon when searching on how to do this:
    [Authentication framework] (https://www.youtube.com/watch?v=KrH5e-JP3Fk)

### 2. Returning useful info: what info is even useful?
    Images for republic display are stored inside the sql as an id and a path.
    Every damn user, republic, place, whatever use these damn things. Even if we're
    serving the whole bloody folder with all the juicy ass cpf's and names and dates 
    which databrokers would be very interested in, we're shit out of luck if we can't
    correctly determine whose image is that and the frontend ain't prepared to pass 
    an id and serve those images in a pretty way.

    Anyway, this should be a get issue. meaning an app.get might solve it and the only 
    issue might be adapting the front end to handle rendering by id. 