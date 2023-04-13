---

## -- Script Postgre

CREATE TYPE gender AS ENUM ('m','w');

CREATE TABLE public.User(
id SERIAL NOT NULL ,
firstname VARCHAR (50) NOT NULL ,
lastname VARCHAR (50) NOT NULL ,
email VARCHAR (50) NOT NULL ,
mobile VARCHAR (10) NOT NULL ,
password VARCHAR (255) NOT NULL ,
dateofbirth DATE NOT NULL ,
gender GENDER NOT NULL ,
CONSTRAINT User_PK PRIMARY KEY (id)
)WITHOUT OIDS;

---

## -- Table: publication

CREATE TABLE public.publication(
id SERIAL NOT NULL ,
titre VARCHAR (5000) NOT NULL ,
id_User INT NOT NULL ,
CONSTRAINT publication_PK PRIMARY KEY (id)

    ,CONSTRAINT publication_User_FK FOREIGN KEY (id_User) REFERENCES public.User(id)

)WITHOUT OIDS;

---

## -- Table: Link

CREATE TABLE public.Link(
id_User INT NOT NULL ,
id_Friend INT NOT NULL ,
CONSTRAINT Link_PK PRIMARY KEY (id_User,id_Friend)

    ,CONSTRAINT Link_User_FK FOREIGN KEY (id_User) REFERENCES public.User(id)
    ,CONSTRAINT Link_Friend_FK FOREIGN KEY (id_Friend) REFERENCES public.User(id)

)WITHOUT OIDS;

---

## -- Table: like

CREATE TABLE public.like(
id_publication INT NOT NULL ,
id_User INT NOT NULL ,
id VARCHAR (50) NOT NULL ,
CONSTRAINT like_PK PRIMARY KEY (id_publication,id_User)

    ,CONSTRAINT like_publication_FK FOREIGN KEY (id_publication) REFERENCES public.publication(id)
    ,CONSTRAINT like_User0_FK FOREIGN KEY (id_User) REFERENCES public.User(id)

)WITHOUT OIDS;

---

## -- Table: comment

CREATE TABLE public.comment(
id_publication INT NOT NULL ,
id_User INT NOT NULL ,
id VARCHAR (50) NOT NULL ,
content VARCHAR (500) NOT NULL ,
CONSTRAINT comment_PK PRIMARY KEY (id_publication,id_User)

    ,CONSTRAINT comment_publication_FK FOREIGN KEY (id_publication) REFERENCES public.publication(id)
    ,CONSTRAINT comment_User0_FK FOREIGN KEY (id_User) REFERENCES public.User(id)

)WITHOUT OIDS;
