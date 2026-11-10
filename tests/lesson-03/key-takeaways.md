# KEY-TAKEWAYS

## 1. Restore từ các vùng về WD
- **Staging -> WD:**
```
git restore --staged <tên_file>     //restore file chỉ định
```
```
git restore --staged .              //restore full 
```

- **Repository -> WD**
```
git reset HEAD~ <số_commit>
```
VD: **git reset HEAD~ 2** //reset lại commit số 2

## 2.Branching (tạo nhánh cho repository)
- **tạo nhánh** : ```git branch <tên_nhánh>```

- **di chuyển nhánh** : ``` git checkout <tên_nhánh>```


_Lưu ý: nhánh vừa mới được tạo sẽ copy toàn bộ nội dung từ nhánh hiện tại_

- **tạo và di chuyển nhánh tức thời** : ``` git checkout -b <tên_nhánh>```

- **xóa nhánh** : ```git branch -D <tên_nhánh>```

_Lưu ý: di chuyển qua nhánh khác trước khi xóa nhánh_

## 3. Git Ignore
> Là file cấu hình trong Git
=> giúp chỉ định những file và thư mục không cần được theo dõi bởi Git.

VD: file ``.env`` vì file đó  thường chứa thông tin cá nhân

---

# JAVASCRIPT

## 1. Convention (Quy tắc code)
 - **camelCase**: chữ đầu viết thường, các chữ sau viết hoa => thường được dùng để đặt tên biến <var> hoặc hàm

- **kebab-case** (hình cây xiên): viết thường toàn bộ được ngăn cách bởi dấu "-" => thường được dùng để đặt tên file & folder.

- **PascalCase** : tất cả chữ cái đầu đều viết hoa

## 2. ```console.log``` nâng cao
> là 1 tool quan trọng giúp debug và theo dõi code.

Có 2 cách sử dụng chính:
- sử dụng với biến 
```

    let name = "Bill";
    console.log(`my name is: ${name});
```

- sử dụng với chuỗi (String)
```
    let name = "Bill";
    console.log("my name is: "+name);
```

> *Backtick hỗ trợ viết chuỗi nhiều dòng và chèn biến + biểu thức*

## 3. Object
> Là 1 trong những kiểu dữ liệu quan trọng => được dùng để lưu  dữ liệu kiểu key-value

**Syntax**:
```
    const/let <var_name>={
        key1=val1;
        key2=val2;
    }
```
VD: Object ở đây là perInfo(object chứa 3 biến với 2 kiểu dữ liệu là string và num
)
```
    const perInfo={
        name = "Truong",
        age =  22,
        ciziten = "Vietnam"
    }
```

> *Cách truy xuất giá trị của object*

=> Sử dụng dấu chấm "."

VD1: ```perInfo.name``` hay là ```perInfo[name]```

VD2: 

console.log(\`Tôi tên là `{perInfo.name}`, tôi hiện tại đang `{perInfo.age}` tuổi và tôi là cư dân `${perInfo.citizen}`);

## 4. Array
> Syntax:
```
    const arr = [22,11,4];
```
- Khác với index, length bằng số phần tử

- Array bắt đầu từ index = 0

## 5. Function
- Là hàm, là 1 đoạn code có thể tái sử dụng nhiều lần
> Syntax
```
    function<func_name>(){
        //code
    }
```

**`()`: là để chứa các tham số sử dụng trong hàm**

