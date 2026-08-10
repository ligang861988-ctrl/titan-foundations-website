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
   `contact.*` 文案里，全站搜索 `2348105916614` / `ligang861988@gmail.com` 就能找到。
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

- 公司注册名：确认是否就是 Titan Foundations Nigeria Ltd（页脚在用）。
- 电话 / WhatsApp：+234 810 591 6614；邮箱：ligang861988@gmail.com（已更新为本人信息）。
- TikTok 主页：https://www.tiktok.com/@qianghandebolu（已更新）。
- 抖音主页链接：等真实主页链接发来后替换（`index.html` 里搜 `field.douyin`）。
- CAC 公司注册号：等确认后加到页脚和关于区（暂未添加）。
- 建议申请一个正式域名（如 titanfoundations.ng / titanfoundations.com）后部署上线。

## 搜索引擎收录（SEO）

### 域名状态

当前正式网址：https://ligang861988-ctrl.github.io/titan-foundations-website/

`robots.txt`、`sitemap.xml`、`index.html` 里的 canonical / Open Graph / 结构化数据
已全部指向该网址。以后如果绑定自定义域名，把这三个文件里的旧网址整体替换成新域名
即可（也可以把新域名发给制作方代改）。

### 提交到搜索引擎（各约 5 分钟）

**Google：**
1. 打开 https://search.google.com/search-console ，用 Google 账号登录
2. 添加资源 → 选“网址前缀”→ 粘贴你的正式网址 → 验证（托管在 Netlify/GitHub Pages 时通常自动验证）
3. 左侧“Sitemap”→ 输入 `sitemap.xml` → 提交

**Bing：**
1. 打开 https://www.bing.com/webmasters 登录
2. 可以从 Google Search Console 一键导入，或手动添加网址并提交 `sitemap.xml`

一般 1–4 周内开始被收录；之后在 Google 搜索 `site:你的网址` 可确认收录状态。
