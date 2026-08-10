# Titan Foundations — 公司官网

基于《泰坦公司宣传页英文版(1).html》（Company Profile 2025）制作的单页公司官网，中英双语（右上角一键切换），纯静态文件，无需服务器即可运行和部署。

## 文件结构

```
（本仓库根目录即网站根目录）
├── index.html              # 页面主体（结构 + 全部内容）
├── assets/
│   ├── css/style.css       # 样式（深绿 + 金色，沿用宣传页配色）
│   ├── js/main.js          # 中英切换、移动端菜单、滚动动效（翻译文案也在这里）
│   ├── img/                # 网站图片（已从宣传页提取并压缩）
│   │   └── profile-source/ # 宣传页里提取的原始照片（27 张，备用）
│   └── video/site-preview.mp4  # 工地现场视频（可替换）
└── scripts/
    ├── prepare_images.py   # 图片处理脚本（换照片后可重新运行）
    └── preview.js          # 本地渲染预览截图（桌面中/英 + 手机三张）
```

## 怎么预览

直接双击 `index.html` 用浏览器打开即可；也可以把这个仓库文件夹整体拖到
[Netlify Drop](https://app.netlify.com/drop)、GitHub Pages、Vercel 或任何静态托管，
自动就能得到一个正式网址。

想自动生成预览截图（`_preview_en.png` / `_preview_zh.png` / `_preview_mobile.png`）：

```powershell
node scripts/preview.js
```

## 怎么改内容（重要）

1. **正文（英文 + 中文）**：都在 `assets/js/main.js` 顶部的 `I18N` 字典里，
   按 `en` / `zh` 分组，改对应 key 即可。
2. **联系方式**：WhatsApp 号码和邮箱在 `index.html` 的联系区，以及 `main.js` 的
   `contact.*` 文案里，全站搜索 `2349065625157` / `zhangzhenning5@gmail.com` 就能找到。
3. **社交账号链接**：`index.html` 里搜索 `field.tiktok` 和 `field.douyin` 旁的
   `href="#"`，换成你的 TikTok / 抖音主页链接。
4. **公司名 / 地址**：搜索 `Sule Abuka` 或 `TITAN` 替换。
5. **视频**：把新视频覆盖到 `assets/video/site-preview.mp4`（建议 15MB 以内），
   文件名不变即可。

## 图片说明

- `assets/img/profile-source/` 是从宣传页提取的原始照片，命名对应原文档用途
  （如 `img_07.jpg` = 旋挖钻机）。
- 网站用图已压缩在 `assets/img/` 下（hero、about、fleet-*、project-*、qa-*、site）。
- 想换照片：直接覆盖同名文件即可；或修改 `scripts/prepare_images.py` 后运行：

```powershell
python scripts/prepare_images.py
```

## 建议下一步

- 确认公司注册名是否就是 Titan Foundations Nigeria Ltd，以及电话号码、邮箱是否要更新。
- 补上 TikTok / 抖音主页真实链接。
- 建议申请一个正式域名（如 titanfoundations.ng / titanfoundations.com）后部署上线。
