var tipuesearch = {"pages": [{'title': 'About', 'text': '41023141 姜連安 \n 倉儲: https://github.com/41023141/cp2023 \n 網站: https://41023141.github.io/cp2023/ \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': '', 'tags': '', 'url': 'Brython.html'}, {'title': 'progress', 'text': "w1 : \n 建立帳號與網站 \n 利用已經帶有 Brython 執行環境的倉儲, 在設定學員 Github Classroom 首次作業時, 即經由 template 置入, 因此學員只要: \n 利用學校 email 帳號, 建立 Github 帳號, 以英文姓名縮寫加上一組數字, 選擇最短帳號名稱 例如: jfk40723199, jfk 為其自選的姓名縮寫, 而隨後則加上各自的學號. \n 擁有 Github 帳號後, 即可透過 Github Classroom assignment 連結取得作業倉儲, 自行在倉儲中設定 Github Pages 後, 即可啟用作業網站 (以下 \xa0 所謂 網站均指靜態網站 \xa0 , 而用來編輯網站內容的 動態網站, 則統稱為網際內容編輯器 , 使用動態網站的目的在編輯靜態網站的內容). 網站內容經過編輯之後, 必須建立新的網站內容 (使用 generate_pages), 然後將新的網站內容更新到對應的 Github 倉儲中 (稱為改版, 其過程經歷 git add, git commit 與 git push 等階段). \n git 為分散式版次管理系統工具. \n git add \n git commit \n git push \n w2 : \n 說明安裝 Apps, 如何設定網路, 查驗是否正確連網 \n 說明如何利用近端可攜系統執行 C 程式, 如何利用 ChatGPT 進行對話 \n 說明如何利用 Replit 協助編輯網頁內容 \n 說明如何 connect Replit to Github, 如何建立個人網站並利用 Replit 啟動編輯網站 \n w3 : \n 有關電腦輔助設計室網路設定說明 \n 處理 .replit 與 replit.nix 中的舊 Python 設定問題 \n 說明如何為 site-個人github帳號 倉儲設定 Github Pages \n 採用 Github Classroom 建立作業倉儲的問題: \n 2023/09/26 在 1a w3 課程進行到建立各學員 site 作業時發現, 將 Replit 導入 Github 倉儲的流程中, 所產生的系統間權限設定, 必須由 Github Classroom 管理帳號 (以 cp2023 為例, 附屬在 mdecp2023 帳號下), 針對各用戶所提出的個別 Replit 權限 requests (以 site-scrum-1 倉儲為例, 只能透過 Replit 提出控管 mdecp2023/site-scrum-1 倉儲的權限) \xa0 逐一進行設定 . \n \n (上圖顯示共有三名用戶針對 mdecp2023 帳號下的 Github Classroom 倉儲提出 Replit 連線要求, 其中只有最上方用戶的 request 取得 mdecp2023/site-scrum-1 倉儲的維護權限, 其餘兩則 requests 則仍處於待審核階段. 意即若要讓各用戶整合 Replit, \xa0 每一個 Github Classroom 作業, 管理者都必須手動處理超過兩百則的 requests ) \n 為去除管理者的手動設定負擔, 決定 2023 cp 與 cad 等課程將放棄使用 Github Classroom. 改為由各學員自行針對課程建立用來評分的課程倉儲與網站 (cp 課程建立 cp2023 倉儲, cad 課程則建立 cad2023 倉儲), 直接附屬在學員的 Github 帳號下, 後續的 submodule 設定與倉儲協同權限則統一由各學員自行負責 \n w4 : \n 各學員自行建立線上考試帳號 \n 依據 \xa0 112 學年度第一學期教師授課表 中的學員修課名單, 利用 Teams 中的 Excel 取學員 Github 帳號. \n 各學員自行建立 Github 評分倉儲 cp2023, 並設定 Github Pages \n 登入 Github 後, 以\xa0 https://github.com/mdecycu/cmsite \xa0作為 Template 建立 cp2023 倉儲 \n 在 Replit IDE 上啟動 cp2023 內容編輯網站, 並將改版內容推送至 Github \n 在同時登入 Github 與 Replit 的情況下, 將 Replit 帳號 connect 至 Github 帳號 \n 利用 import 將 cp2023 倉儲導入 Replit \n 設定 .replit 為 python3 main.py \n 根據 cp2023 倉儲中的 README.md 在 Shell 區執行 git submodule 與 pip install \n 以 Run 執行 main.py 啟動倉儲內容編輯網頁 \n 利用 密碼產生程式 將所選定的管理者密碼字串存入 Tool - Secrets 頁面中的 config 變數 (若無 config 環境變數設定, 動態網站登入管理者密碼將交由倉儲中的 config/config 字串進行驗證) \n 重新啟倉儲內容編輯網頁後, 以新管理者密碼登入後改版並 Convert 為靜態內容後, 在 Git 頁面中將改版內容推至 Github \n w5 : \n 在 Replit cp2023 專案中設定 C 程式與 Gnuplot 執行環境, 完成 上課內容中的練習 \n replit.nix \xa0 納入 gnuplot 套件 \n w5 1b cp2023 與 Replit C 程式執行環境說明影片.mp4 \n 設定過程使用的參考網站:\xa0 https://scrum-1.github.io/cp2023/content/w5.html \xa0 \n 設定過程使用的 Repl: \xa0 https://replit.com/@scrum1/cp2023 \xa0(包含 \xa0 replit.nix \xa0 設定檔案) \n 蒐集牛頓第二運動定律、mass-spring-damper 系統、Euler's Method 數值分析相關資料 \n 將 \xa0 euler_gnuplot_msd_ex1.c \xa0放入 downloads 目錄中, 以 cc\xa0euler_gnuplot_msd_ex1.c -o euler_gnuplot_msd_ex1 產生\xa0euler_gnuplot_msd_ex1 可執行檔案後, 以 ./euler_gnuplot_msd_ex1 執行 \n 最後可以在 images 目錄中得到 \xa0 motion_plot.png \xa0 模擬結果 \n jsliu_c_programming.pdf \xa0 (需要下載密碼) \n Introduction to C \xa0(經由校園網路或 VPN 下載) \n 改由學員自行利用\xa0 https://github.com/mdecycu/cmsite \xa0倉儲作為 template, 建立名稱為 cp2023 的評分倉儲 \n w6 : \n 建立線上考試題目 \n 各學員評分倉儲與網站的內容維護 \n SMap \n EditA \n Edit \n Config \n Search \n IUpload \n IList \n FUpload \n FList \n Logout \n Convert \n C 程式練習一: \n 請從\xa0 https://www.w3resource.com/c-programming-exercises/ \xa0 網頁中自選 10 個練習範例, 分別在 Replit, Windows 與 Linux (or macOS) 中執行後, 取下執行畫面放入個人的 Github Pages 網頁 (即帳號.github.io 網站), 以 \xa0 ANSIC \xa0 作為頁面標題並詳細說明每一行的程式語法. \n C 程式練習二: \n 請從\xa0 jsliu_c_programming.pdf \xa0 (需要下載密碼)與\xa0 Introduction to C \xa0(經由校園網路或 VPN 下載)電子書中各擷取 10 個\xa0C 程式範例, 分別: \n 1. 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Go 類編譯方式執行. \n 2. 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Compile 編譯連結後取得 a.out, 然後在命令列中以 a.out 執行. \n 3. 在 Replit 全球資訊網 IDE 環境中的 Shell 頁面, 以 cc ex1.c 產生可執行檔案 a.out, 並以 ./a.out 執行, 或者以 cc ex1.c -o ex1 指定編譯連結後的可執行檔案名稱為 ex1 後, 以 ./ex1 執行. \n 最後將所選擇的 C 程式範例執行過程與相關說明內容, 整理在 個人 github 帳號下的 cp2023 倉儲網頁 中的 \xa0 c_ex \xa0 頁面中 \n", 'tags': '', 'url': 'progress.html'}, {'title': 'w6', 'text': '\n \xa0寫一個將攝氏度轉換為華氏度的程式。 預期輸出 ： 輸入溫度（攝氏度）：45 113.000000 華氏度 。\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  \xa0 \xa0  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 寫一個計算球體體積的 C 程式。 預期輸出 ： 輸入球體的半徑：2.56 球體的體積為 82.63324。\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 寫一個 C 程序，將公里每小時轉換為英哩每小時。 預期輸出 ： 輸入公里每小時：15 9.320568 英里每小時\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 寫一個 C 程序，以小時和分鐘為輸入，併計算總分鐘數。 預期輸出 ： 輸入小時：5 輸入分鐘：37 總計：337 分鐘。\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 用C 寫一個程序，以分鐘為輸入，並顯示總小時數和分鐘數。 預期輸出 ： 輸入分鐘：546 9 小時 6 分鐘\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n 用 C 語言編寫一個程序，讀取名字、姓氏和出生年份，並依序顯示姓名和年份。 預期輸出 ： 輸入您的名字：Tom 輸入您的姓氏：Davis 輸入您的出生年份：1982 Tom Davis 1982\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 用 C 語言寫一個程序，計算一行輸入的三個數字的和，並用逗號分隔。 預期輸出 ： 輸入三個數字，以逗號分隔：5,10,15 三個數字總和：30\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n 寫一個C 程式來執行兩個數字的加法、減法、乘法和除法。 預期輸出 ： 輸入任意兩個數字，以逗號分隔：10,5 給定數字的和：15 給 定數字的差：5 給定數字的乘積：50給 定數字的商數：2.000000\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 如果給定兩個角，請寫一個 C 程式來求三角形的第三個角。 預期輸出 ： 輸入以逗號分隔的三角形的兩個角：50,70 三角形的第三個角：60\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n \n 寫一個C 程式將字串轉換為無符號長整型。 \n 測試數據和預期輸出 ： \n 輸入無符號數：25                                             \n輸出：25 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n', 'tags': '', 'url': 'w6.html'}, {'title': '課程評分', 'text': '課程評分: \n 線上測驗、期中網站與簡報、期末網站與簡報. \n 線上測驗: \n 建立帳號後 ( 請將密碼寫入手機的備忘錄 ), 每週不定時進行. \n 期中網站評分與簡報: \n 期中考前兩週開始進行. \n 期末網站評分與簡報: \n 期末考前兩週開始進行. \n 期中成績計算: \n 期中考與之前各週線上測驗成績平均 \n 學期成績計算: \n (期中成績與之後各週線上測驗成績平均)*60%+(期中網站與簡報成績)*20%+(期末網站與簡報成績)*20% \n', 'tags': '', 'url': '課程評分.html'}]};