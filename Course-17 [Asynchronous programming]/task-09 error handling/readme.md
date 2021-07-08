### file.js
Реализуйте и экспортируйте асинхронную функцию touch, которая создает файл если его не существует.
```
import { touch } from './file.js';
touch('/myfile').then(() => console.log('created!'));
```

#### Подсказка
- fs.access - проверка существования файла
