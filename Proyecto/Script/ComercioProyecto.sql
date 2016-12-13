/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     13/12/2016 15:18:25                          */
/*==============================================================*/


drop table if exists CLIENTE;

drop table if exists ESTADO;

drop table if exists PERIODICO;

drop table if exists PERSONA;

drop table if exists REVISTA;

drop table if exists SUSCRIPCION;

/*==============================================================*/
/* Table: CLIENTE                                               */
/*==============================================================*/
create table CLIENTE
(
   ID_CLI               int not null,
   ID_SUSCRIP           int,
   ID_ESTADO            int,
   ID_PER               int,
   DIR_CLI              varchar(40),
   TELEFONO_CLI         varchar(10),
   primary key (ID_CLI)
);

/*==============================================================*/
/* Table: ESTADO                                                */
/*==============================================================*/
create table ESTADO
(
   ID_ESTADO            int not null,
   DESCRIPCION_ESTADO   varchar(20),
   primary key (ID_ESTADO)
);

/*==============================================================*/
/* Table: PERIODICO                                             */
/*==============================================================*/
create table PERIODICO
(
   ID_SERV              char(10) not null,
   DESC_PER             char(10),
   COST_PER             char(10),
   EDICION_PER          char(10),
   primary key (ID_SERV)
);

/*==============================================================*/
/* Table: PERSONA                                               */
/*==============================================================*/
create table PERSONA
(
   ID_PER               int not null,
   NOMBRE_PER           varchar(20),
   APELLIDO_PER         varchar(20),
   CI_PER               varchar(10),
   FECHANAC_PER         date,
   ESTADOCIV_PER        varchar(20),
   LUGARNAC_PER         varchar(20),
   primary key (ID_PER)
);

/*==============================================================*/
/* Table: REVISTA                                               */
/*==============================================================*/
create table REVISTA
(
   ID_REV               int not null,
   EDICION_REV          varchar(20),
   NOMBRE_REV           varchar(20),
   COSTO_REV            varchar(20),
   primary key (ID_REV)
);

/*==============================================================*/
/* Table: SUSCRIPCION                                           */
/*==============================================================*/
create table SUSCRIPCION
(
   ID_SUSCRIP           int not null,
   ID_SERV              char(10),
   ID_REV               int,
   FECHA_SUSCRIP        varchar(10),
   primary key (ID_SUSCRIP)
);

alter table CLIENTE add constraint FK_EST_CLI foreign key (ID_ESTADO)
      references ESTADO (ID_ESTADO) on delete restrict on update restrict;

alter table CLIENTE add constraint FK_PER_CLI foreign key (ID_PER)
      references PERSONA (ID_PER) on delete restrict on update restrict;

alter table CLIENTE add constraint FK_RELATIONSHIP_3 foreign key (ID_SUSCRIP)
      references SUSCRIPCION (ID_SUSCRIP) on delete restrict on update restrict;

alter table SUSCRIPCION add constraint FK_PER_SUSCRIP foreign key (ID_SERV)
      references PERIODICO (ID_SERV) on delete restrict on update restrict;

alter table SUSCRIPCION add constraint FK_REV_SUSCRIP foreign key (ID_REV)
      references REVISTA (ID_REV) on delete restrict on update restrict;

