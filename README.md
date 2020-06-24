# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group-name|text|null: false, foreign_key: true|

### Association
- belongs_to :users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|passward|string|null: false|

### Association
- has_many :chats
- has_many :groups_users

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|coment|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|grupe_name|integer|null: false, foreign_key: true|
|imag|string|
