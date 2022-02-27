---
title: nvim hightly cái đoạn copy
author: thuanpham2311
date: 2021-08-11 15:49
categories: [Blogging]
tags: [vim]
---

- trong thường ngày thì kiểu `yiw`, `yy`, `y$`, `ggyG` cái thể loại, mà tui muốn nó fancy hơn chút hay dễ phát hiện khi bấm lộn phím, copy sai cái mình muốn copy chẳng hạn

```bash
augroup highlight_yank
    autocmd!
    autocmd TextYankPost * silent! lua require'vim.highlight'.on_yank({timeout = 200})
augroup END
```

bonus :smile:
`noremap Y y$`

note:

- cái này cần lua support, mà vim hình như không có lua support, xài nvim là okay :D, hay xài vim plugin cũng được
- cái `timeout` là thời gian nó hiển thị nha.
- ref: <https://github.com/thuanpham2311/dotfiles>

**Reference**

- Github của tui: [http://github.com/thuanpham2311](http://github.com/thuanpham2311)
- Đọc thêm mấy cái xàm xí của tui: [https://thuanpham2311.github.io](https://thuanpham2311.github.io)

---

**DISCLAIMER**

Những câu chuyện, bài học và lời khuyên của tui là những trải nghiệm riêng của cá nhân, không phản ánh ý kiến từ những tổ chức hay công ty nào. Đa phần lời tui viết là chém gió, nên mấy chế nên suy ngẫm nó có phù hợp với hoàn cảnh của bản thân không nha.
