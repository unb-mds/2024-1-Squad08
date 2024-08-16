"Written by bcL0c, whose login planning and execution will undoubtedly, somehow, erase all the database data"

### What is this document

    This document attempts to design how the information should flow along the app and be
    delivered to the user so we may perform a login operation and, therefore, grant privileges
    based on this login.
    Requirements for this system is as follows:
        1. The user (or client) should be able to send an id and password 
        2. The server should be able to receive and treat this information
        3. 

### 1. Info passed client-server 
    This should be done via POST operation, in which the user attempts to send info. 
    After sending the post and we receive it, a query must be performed so we know who
    is trying to login
