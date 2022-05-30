### 실행
```
npm run serve
```

### mysql error 발생 시

#### 원인
```
Client does not support authentication protocol requested by server; consider upgrading MySQL client 
```

#### 해결
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```