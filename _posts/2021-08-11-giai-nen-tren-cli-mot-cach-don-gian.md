---
title: giải nén trên cli một cách đơn giản
author: thuanpham2311
date: 2021-08-11 15:56
categories: [Blogging]
tags: [cli]
---

- Tui thấy mỗi cái file như .zip đi chẳng hạn thì sẽ có một phần mềm nén và giải nén khác nhau, mà tui thấy nhớ lệch mệt qué nên kiếm trên mạng được cái function này hay nên share cho mọi người

**zsh and bash shell**

```bash
u () {
    if [ -f $1 ]; then
        case $1 in
            *.tar.bz2)  tar -jxvf $1                        ;;
            *.tar.gz)   tar -zxvf $1                        ;;
            *.bz2)      bunzip2 $1                          ;;
            *.dmg)      hdiutil mount $1                    ;;
            *.gz)       gunzip $1                           ;;
            *.tar)      tar -xvf $1                         ;;
            *.tbz2)     tar -jxvf $1                        ;;
            *.tgz)      tar -zxvf $1                        ;;
            *.zip)      unzip $1                            ;;
            *.ZIP)      unzip $1                            ;;
            *.pax)      cat $1 | pax -r                     ;;
            *.pax.Z)    uncompress $1 --stdout | pax -r     ;;
            *.rar)      unrar x $1                          ;;
            *.Z)        uncompress $1                       ;;
            *)          echo "'$1' cannot be extracted/mounted via extract()" ;;
        esac
    else
        echo "'$1' is not a valid file"
    fi
}
```

**fish shell**

```bash
function u --description "Expand or extract bundled & compressed files"
  set --local ext (echo $argv[1] | awk -F. '{print $NF}')
  switch $ext
    case tar  # non-compressed, just bundled
      tar -xvf $argv[1]
    case gz
      if test (echo $argv[1] | awk -F. '{print $(NF-1)}') = tar  # tar bundle compressed with gzip
        tar -zxvf $argv[1]
      else  # single gzip
        gunzip $argv[1]
      end
    case tgz  # same as tar.gz
      tar -zxvf $argv[1]
    case bz2  # tar compressed with bzip2
      tar -jxvf $argv[1]
    case rar
      unrar x $argv[1]
    case zip
      unzip $argv[1]
    case '*'
      echo "unknown extension"
  end
end
```

ref: <https://github.com/thuanpham2311/dotfiles>

**Reference**

- Github của tui: [http://github.com/thuanpham2311](http://github.com/thuanpham2311)
- Đọc thêm mấy cái xàm xí của tui: [https://thuanpham2311.github.io](https://thuanpham2311.github.io)

---

**DISCLAIMER**

Những câu chuyện, bài học và lời khuyên của tui là những trải nghiệm riêng của cá nhân, không phản ánh ý kiến từ những tổ chức hay công ty nào. Đa phần lời tui viết là chém gió, nên mấy chế nên suy ngẫm nó có phù hợp với hoàn cảnh của bản thân không nha.
