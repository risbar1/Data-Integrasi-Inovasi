/*
 Navicat Premium Dump SQL

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 140002 (140002)
 Source Host           : localhost:5432
 Source Catalog        : klinik
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140002 (140002)
 File Encoding         : 65001

 Date: 24/06/2025 12:06:06
*/


-- ----------------------------
-- Sequence structure for dokter_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."dokter_seq";
CREATE SEQUENCE "public"."dokter_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9000000000000
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for jadwaldosen_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."jadwaldosen_seq";
CREATE SEQUENCE "public"."jadwaldosen_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 90000000000000
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_seq";
CREATE SEQUENCE "public"."user_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9000000
START 1
CACHE 1;

-- ----------------------------
-- Table structure for day
-- ----------------------------
DROP TABLE IF EXISTS "public"."day";
CREATE TABLE "public"."day" (
  "nama" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of day
-- ----------------------------
INSERT INTO "public"."day" VALUES ('senen');
INSERT INTO "public"."day" VALUES ('selasa');
INSERT INTO "public"."day" VALUES ('rabu');
INSERT INTO "public"."day" VALUES ('kamis');
INSERT INTO "public"."day" VALUES ('jumat');
INSERT INTO "public"."day" VALUES ('sabtu');
INSERT INTO "public"."day" VALUES ('minggu');

-- ----------------------------
-- Table structure for dokter
-- ----------------------------
DROP TABLE IF EXISTS "public"."dokter";
CREATE TABLE "public"."dokter" (
  "nama" varchar(255) COLLATE "pg_catalog"."default",
  "id" int4 NOT NULL DEFAULT nextval(('dokter_seq'::text)::regclass),
  "kategori" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(6) NOT NULL DEFAULT now()
)
;

-- ----------------------------
-- Records of dokter
-- ----------------------------
INSERT INTO "public"."dokter" VALUES ('dr. Andi Putra', 1, 'Dokter Umum', '2025-06-24 11:42:26.906439+07', '2025-06-24 11:42:28.705019+07');
INSERT INTO "public"."dokter" VALUES ('dr. Siti Nurhayati', 2, 'Dokter Umum', '2025-06-24 11:42:26.906439+07', '2025-06-24 11:42:28.705019+07');
INSERT INTO "public"."dokter" VALUES ('dr. Rina Astuti, Sp.A', 3, 'Dokter Anak', '2025-06-24 11:42:26.906439+07', '2025-06-24 11:42:28.705019+07');
INSERT INTO "public"."dokter" VALUES ('dr. Maya Lestari, Sp.A', 4, 'Dokter Anak', '2025-06-24 11:42:26.906439+07', '2025-06-24 11:42:28.705019+07');
INSERT INTO "public"."dokter" VALUES ('dr. Hendra Saputra, Sp.JP', 5, 'Dokter Jantung', '2025-06-24 11:42:26.906439+07', '2025-06-24 11:42:28.705019+07');
INSERT INTO "public"."dokter" VALUES ('dr. Agus Widodo, Sp.JP', 6, 'Dokter Jantung', '2025-06-24 11:42:26.906439+07', '2025-06-24 11:42:28.705019+07');

-- ----------------------------
-- Table structure for jadwal_dokter
-- ----------------------------
DROP TABLE IF EXISTS "public"."jadwal_dokter";
CREATE TABLE "public"."jadwal_dokter" (
  "id" int4 NOT NULL DEFAULT nextval(('jadwaldosen_seq'::text)::regclass),
  "dokterid" int4,
  "status" varchar(10) COLLATE "pg_catalog"."default",
  "date" date,
  "day" varchar COLLATE "pg_catalog"."default",
  "time_start" time(6),
  "time_finish" time(6),
  "quota" int4,
  "createdAt" timestamptz(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(6) NOT NULL DEFAULT now()
)
;

-- ----------------------------
-- Records of jadwal_dokter
-- ----------------------------
INSERT INTO "public"."jadwal_dokter" VALUES (1, 3, 'true', '2025-06-24', 'senen', '10:24:52', '12:24:56', NULL, '2025-06-24 11:41:17.717081+07', '2025-06-24 11:41:40.232082+07');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "id" int4 DEFAULT nextval(('user_seq'::text)::regclass),
  "createdAt" timestamptz(6) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(6) NOT NULL DEFAULT now()
)
;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO "public"."user" VALUES ('risky', '$2a$12$DQFEPCZCJofZy10KjJhLy.VIB7k565Ow0dKXN282/lw3FccODrxUe', 1, '2025-06-24 11:43:17.022853+07', '2025-06-24 11:43:22.971546+07');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."dokter_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."jadwaldosen_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."user_seq"', 1, true);

-- ----------------------------
-- Primary Key structure for table dokter
-- ----------------------------
ALTER TABLE "public"."dokter" ADD CONSTRAINT "dokter_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table jadwal_dokter
-- ----------------------------
ALTER TABLE "public"."jadwal_dokter" ADD CONSTRAINT "jadwal_dosen_pkey" PRIMARY KEY ("id");
