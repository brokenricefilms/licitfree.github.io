---
title: cd cho dân lười như tui
author: thuanpham2311
date: 2021-06-28 20:48
categories: [Blogging]
image:
  src: /assets/img/aniemPrayMeme.jpg
  alt: aniemPrayMeme
tags: [terminal]
---

```bash
c () {
    local dir
    dir=$(fdfind -t d . $HOME | fzf-down) &&
        cd "$dir"
            clear
            l
}
```

Cái function trên làm cái méo gì?
- thường mấy chế xài `cd` để di chuyển đến các folder các thể loại, thường gõ mệt với chậm, cái function trên giải quyết cái vấn để này.
- khi nhập `c` vào command line trên terminal của mấy chế thì nó sẽ hiện cửa sổ fzf, rồi mấy chế gõ mấy kí tự nó matching với cái path của cái folder mà mấy chế muốn đến, rồi `clear` cái màng hình terminal rồi ls ra các thể loại trong folder đó

# note

`fdfind`: giống với find nhưng xài nó vui hơn

```bash
fzf-down() {
  fzf --height 50% --min-height 20 --bind ctrl-/:toggle-preview "$@" --reverse
}

# exa giống như `ls` nhưng mà nó fancy hơn
alias l='clear ; exa -al --color=always --group-directories-first'
```

mấy chế muốn xem thêm dotfiles của tui thì mấy chế vào link này: <https://github.com/thuanpham2311/dotfiles>
