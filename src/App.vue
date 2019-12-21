<template>
  <div id="app">
    <!--
      Doc: 規約のWrapper
      DocTitle: タイトル
      DocNote: 重要でない文章
      DocChapter: 章
        number: 章の番号
        name: 章の名前
      DocSection: 節
        number: 節の番号
        name: 節の名前
      DocArticle: 条
        number: 条の番号
        name: 条の名前
      DocParagraph: 項
        number: 項の名前
      DocList: 号のWrapper
        type: 号の番号の振り方 ("漢数字" | "イロハ")
      DocListItem: 号
        number: 号の番号
      DocLink: 条や項へのリンク
        article: リンク先の条の番号（条の中でDocLinkを書いていてかつarticleが指定されなかった場合、DocLinkの書いてある条の番号を使用する）
        paragraph: リンク先の項の番号（指定されない場合、条へのリンクとなる）
    -->
    <Doc>
      <DocTitle>学生会規約改正案（2019年度発議）</DocTitle>

      <DocNote>
        <p>2019/12/18 更新</p>
        <p>
          本ページは、規約改正案の草案をWebページとしての表示に適するように整形したものである。<br />
          原文と本ページで掲載内容に差異があるときは、原文を適用するものとする。
        </p>
        <p>以下本文</p>
      </DocNote>

      <DocChapter number="1" name="総則">
        <DocArticle number="1" name="名称">
          <DocParagraph number="1">
            本会は、奈良工業高等専門学校学生会と称する。
          </DocParagraph>

          <DocParagraph number="2">
            本会は、英語名称として、National Institute of Technology, Nara College - Student Associationを用いる。
          </DocParagraph>

          <DocParagraph number="3">
            本会は、通称として奈良高専学生会並びにNITNC-Student Association及びNITNC-SAを用いる。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="2" name="目的">
          <DocParagraph number="1">
            本会は、独立行政法人国立高等専門学校機構
            奈良工業高等専門学校(以下「学校」という。)の指導の下に、学生の自発的な活動を通して、その人間形成を助長し、高等専門教育の目的達成に資することを目的とする。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="3" name="活動">
          <DocParagraph number="1">
            本会は、<DocLink article="2">第2条</DocLink>の目的を達成するために、次に掲げる諸活動を行う。
            <DocList type="漢数字">
              <DocListItem number="1">会員の文化的共用を向上させる活動</DocListItem>
              <DocListItem number="2">会員の技術及び技能を向上させる活動</DocListItem>
              <DocListItem number="3">会員の健康を保持促進させる活動</DocListItem>
              <DocListItem number="4">会員の福利や厚生を促進する活動</DocListItem>
              <DocListItem number="5">学校内の風紀を向上させ振興する活動</DocListItem>
              <DocListItem number="6">学校内の設備を整備し、会員の学校生活を向上させる活動</DocListItem>
              <DocListItem number="7">会員相互の親睦融和を図る活動</DocListItem>
              <DocListItem number="8">学校の行事への協力や、積極的参加を図る活動</DocListItem>
              <DocListItem number="9">その他本会の目的達成に必要な諸活動</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="2">
            本会の活動を行うに当たっては、次に掲げる事項を遵守するとともに、法令及び学則、学生準則その他の学校の定める諸規則に違反してはならない。
            <DocList type="漢数字">
              <DocListItem number="1">学校の教育方針にのっとり、学校の教育使命の達成に寄与すること</DocListItem>
              <DocListItem number="2">本来の目的使命にのっとり、その目的を逸脱し、学校の秩序を乱すような行動を行わないこと</DocListItem>
              <DocListItem number="3">会員が本会の運営について常に深い関心をはらい、その活動に積極的に参加すること</DocListItem>
              <DocListItem number="4"
                >会員の総意に基づいて運営され、また、いかなる場合においても個人の思想、良心等に関する基本的な自由を侵さないこと</DocListItem
              >
              <DocListItem number="5"
                >学外活動を行うに当たっては、学校の承認と指導を受け、<DocLink article="2">第2条</DocLink
                >の目的の範囲内において行動すること</DocListItem
              >
              <DocListItem number="6"
                >その目的使命の達成上必要があり、かつ、本会の自主性が阻害されないと認めて学校が承認した場合に限り、学外団体に加盟することができること</DocListItem
              >
            </DocList>
          </DocParagraph>
        </DocArticle>

        <DocArticle number="4" name="構成">
          <DocParagraph number="1">
            本会は、学校の本科に在籍する全学生を以て構成する。
          </DocParagraph>

          <DocParagraph number="2">
            <DocLink paragraph="1">前項</DocLink>において規定する学生は、学校への入学と同時に本会の構成員となるものとする。
          </DocParagraph>

          <DocParagraph number="3">
            <DocLink paragraph="1">第1項</DocLink
            >において規定する学生は、学校の卒業、退学その他学籍を喪失する事項と同時に本会の会員資格を失うものとする。
          </DocParagraph>

          <DocParagraph number="4">
            会員は、学校により休学を認められたときは、その期日を以てこれを会員から除外し、準会員とする。
          </DocParagraph>

          <DocParagraph number="5">
            準会員は、学校により復学を認められたときは、その期日を以てこれを準会員から除外し、会員とする。
          </DocParagraph>

          <DocParagraph number="6">
            構成員の名簿は、学校がこれを毎年4月に本会に提出するものとする。<br />
            構成員の名簿は、会員と準会員が明確に区別されなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="5" name="所在地">
          <DocParagraph number="1">
            本会は、奈良県大和郡山市矢田町22番地 奈良工業高等専門学校内に事務所を置く。
          </DocParagraph>

          <DocParagraph number="2">
            事務所は、学校からこれを常時借用し、本会がこれを管理する。
          </DocParagraph>
        </DocArticle>
      </DocChapter>

      <DocChapter number="2" name="組織">
        <DocSection number="1" name="総則">
          <DocArticle number="6" name="機関">
            <DocParagraph number="1">
              本会は次に掲げる機関を置く。
              <DocList type="漢数字">
                <DocListItem number="1">総会</DocListItem>
                <DocListItem number="2">評議会</DocListItem>
                <DocListItem number="3">学級会</DocListItem>
                <DocListItem number="4">執行部</DocListItem>
                <DocListItem number="5">委員会</DocListItem>
                <DocListItem number="6">部</DocListItem>
                <DocListItem number="7">監査局</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2"> <DocLink paragraph="1">前項</DocLink>第一号から第三号の機関を議決機関と称する。 </DocParagraph>

            <DocParagraph number="3"> <DocLink paragraph="1">第1項</DocLink>第四号から第六号の機関を執行機関と称する。 </DocParagraph>

            <DocParagraph number="4"> <DocLink paragraph="1">第1項</DocLink>第七号の機関を監査機関と称する。 </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="2" name="役員">
          <DocArticle number="7" name="役員">
            <DocParagraph number="1">
              本会に次に掲げる役員を置く。
              <DocList type="漢数字">
                <DocListItem number="1">会長</DocListItem>
                <DocListItem number="2">副会長</DocListItem>
                <DocListItem number="3">監査局長</DocListItem>
                <DocListItem number="4"><DocLink article="34" paragraph="1">第34条第1項</DocLink>に定める各課の課長</DocListItem>
                <DocListItem number="5">その他総会で任命された者</DocListItem>
              </DocList>
            </DocParagraph>
          </DocArticle>

          <DocArticle number="8" name="役員の職務">
            <DocParagraph number="1">
              会長は、本会の最高職であり、本会を代表し、会務を統括する。
            </DocParagraph>

            <DocParagraph number="2">
              副会長は、会長を補佐し、会長に事故あるとき又は欠けたときはその職務を代行する。
            </DocParagraph>

            <DocParagraph number="3">
              監査局長は、本会の会務を監査し、会務に問題のあるときはそれを指摘する。
            </DocParagraph>

            <DocParagraph number="4">
              <DocLink article="7" paragraph="1">第7条第1項</DocLink>第四号で定める役員は、自身が課長を務める課を代表し、その職務を統括する。
            </DocParagraph>

            <DocParagraph number="5">
              <DocLink article="7" paragraph="1">第7条第1項</DocLink>第五号で定める役員は、総会より任命された職務を遂行する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="9" name="役員の任命">
            <DocParagraph number="1">
              役員が<DocLink article="10">第10条</DocLink>に定める任期を満了したときは、速やかに後任の役員を任命しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              <DocLink article="7" paragraph="1">第7条第1項</DocLink>第一号及び第二号で定める役員は、第105条第4項に定める役員選挙により選出される。
            </DocParagraph>

            <DocParagraph number="3">
              <DocLink article="7" paragraph="1">第7条第1項</DocLink>第三号で定める役員は、会長がこれを指名し、総会がこれを承認し、任命する。
            </DocParagraph>

            <DocParagraph number="4">
              <DocLink article="7" paragraph="1">第7条第1項</DocLink>第四号で定める役員は、会長がこれを任免する。
            </DocParagraph>

            <DocParagraph number="5">
              <DocLink article="7" paragraph="1">第7条第1項</DocLink>第五号で定める役員は、総会がこれを任命する。<br />
              ただし、この選出を役員選挙により行うことができる。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="10" name="役員の任期">
            <DocParagraph number="1">
              第7条第1項第一号から第三号の役員の任期は、10月1日から翌年9月30日までの1か年とする。<br />
              ただし、再任を妨げない。
            </DocParagraph>

            <DocParagraph number="2">
              第7条第1項第四号で定める役員の任期は、第36条に定める課長の任期に準ずる。<br />
              ただし、再任を妨げない。
            </DocParagraph>

            <DocParagraph number="3">
              第7条第1項第五号で定める役員の任期は、任命の際に定められた1か年以内の期間とする。<br />
              ただし、再任を妨げない。
            </DocParagraph>

            <DocParagraph number="4">
              役員は、その任期を満了した後に後任の役員が任命されるまでの間、役員代理としてその職務を継続する。<br />
              後任の役員が任命されたときは、直ちに役員代理を退かなければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="11" name="補欠の役員">
            <DocParagraph number="1">
              役員に欠員が生じた際は、速やかに補欠の役員を任命しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              第10条の規定に関わらず、役員に欠員の生じた場合の補欠の役員の任期は、前任役員の残任期間とする。<br />
              ただし、再任を妨げない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="12" name="役員の兼任">
            <DocParagraph number="1"> <DocLink article="7">第7条</DocLink>で定める何れの役員も、他の役員を兼任することはできない。 </DocParagraph>
          </DocArticle>

          <DocArticle number="13" name="役員の罷免">
            <DocParagraph number="1">
              <DocLink article="7" paragraph="1">第7条第1項</DocLink
              >第一号、第二号、第三号及び第五号で定める役員は、総会においてその罷免が決議された際には、その意思に関わらずその任を解かれる。
            </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="3" name="総会">
          <DocArticle number="14" name="総会">
            <DocParagraph number="1">
              総会は、本会最高の議決機関であり、全会員により構成される。
            </DocParagraph>

            <DocParagraph number="2">
              全ての会員は、総会において平等な議決権を有する。
            </DocParagraph>

            <DocParagraph number="3">
              総会の招集は、会長がこれを行う。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="15" name="総会の運営">
            <DocParagraph number="1">
              総会の準備及び運営は、議事運営課がこれを行う。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="16" name="総会の開催">
            <DocParagraph number="1">
              総会は、定例総会と臨時総会からなる。
            </DocParagraph>

            <DocParagraph number="2">
              定例総会は、毎年1回、4月又は5月に開催しなければならない。
            </DocParagraph>

            <DocParagraph number="3">
              臨時総会は、次に掲げる何れかに該当する場合に開催する。
              <DocList type="漢数字">
                <DocListItem number="1">評議会において総会の開催又は総会への議案提出が決議されたとき</DocListItem>
                <DocListItem number="2">全役員の過半数が必要と認めたとき</DocListItem>
                <DocListItem number="3">全会員の過半数から要求があったとき</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="4">
              臨時総会の開催要求は、議事運営課にこれを届出るものとする。
            </DocParagraph>

            <DocParagraph number="5">
              <DocLink paragraph="3">第3項</DocLink>第二号又は第三号に基づく開催要求があったとき、この成立要件は、監査局がこれを審査する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="17">
            <DocParagraph number="1">
              総会を開催するときは、開催日から起算して14日以上前に、次に掲げる事項を公示しなければならない。
              <DocList type="漢数字">
                <DocListItem number="1">開催日時</DocListItem>
                <DocListItem number="2">開催場所</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              総会の議題は、開催日から起算して10日以上前に、これを議事運営課へ届出なければならない。<br />
              ただし、議題は次の何れかに該当するものに限る。
              <DocList type="漢数字">
                <DocListItem number="1">評議会より提出されたもの</DocListItem>
                <DocListItem number="2">役員より提出されたもの</DocListItem>
                <DocListItem number="3">全会員の過半数が署名したもの</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="3">
              総会の議題は、開催日から起算して5日以上前に、これを公示しなければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="18" name="総会の議長">
            <DocParagraph>
              総会における議長は、議事運営課長がこれを務める。<br />
              ただし、議事運営課長に事故あるとき又は欠けたときは、議事運営課員の何れかが代理として議長を務める。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="19" name="総会の議決事項">
            <DocParagraph number="1">
              総会は、本会に関する次の事項を審議決定する。
              <DocList type="漢数字">
                <DocListItem number="1">活動計画</DocListItem>
                <DocListItem number="2">予算</DocListItem>
                <DocListItem number="3">本規約の改正</DocListItem>
                <DocListItem number="4">クラブの設立及び解散</DocListItem>
                <DocListItem number="5">学校に対する要望書の提出</DocListItem>
                <DocListItem number="6">本規約、細則その他の本会で定める規定において定められた事項</DocListItem>
                <DocListItem number="7">その他重要事項</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              総会の議決事項は、本規約及び細則に反してはならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="20">
            <DocParagraph number="1">
              本会の全ての機関及び組織は、総会での議決事項を遵守しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              総会の議事は、閉会から起算して14日以内に、これを公示しなければならない。
            </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="4" name="評議会">
          <DocArticle number="21" name="評議会">
            <DocParagraph number="1"
              >評議会は、総会に次ぐ議決機関であり、<DocLink article="22">第22条</DocLink>に定める評議員により構成される。</DocParagraph
            >
            <DocParagraph number="2">全ての評議員は、評議会において平等な議決権を有する。</DocParagraph>
            <DocParagraph number="3">評議会の招集は、会長がこれを行う。</DocParagraph>
          </DocArticle>

          <DocArticle number="22" name="評議員">
            <DocParagraph number="1">
              評議員は、次に掲げるものとする。
              <DocList type="漢数字">
                <DocListItem number="1">会長</DocListItem>
                <DocListItem number="2">副会長</DocListItem>
                <DocListItem number="3">監査局長</DocListItem>
                <DocListItem number="4">
                  次に掲げる機関の代表者
                  <DocList type="イロハ">
                    <DocListItem number="1">各学級</DocListItem>
                    <DocListItem number="2">各委員会</DocListItem>
                    <DocListItem number="3">各部</DocListItem>
                    <DocListItem number="4"><DocLink article="34">第34条</DocLink>各号の課</DocListItem>
                  </DocList>
                </DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              <DocLink paragraph="1">前項</DocLink
              >四号の評議員は、代表者に事故あるとき又は欠けたとき、同一の機関に所属する者が評議員を代理することができる。<br />
              ただし、本規約又は細則において、特に規定されているときはこの限りではない。
            </DocParagraph>

            <DocParagraph number="3"> 評議員は、<DocLink paragraph="1">第1項</DocLink>に掲げる資格に複数該当してはならない。 </DocParagraph>

            <DocParagraph number="4">
              <DocLink paragraph="3">前項</DocLink>の規定は、<DocLink paragraph="2">第2項</DocLink>に基づく評議員の代理人にも適用される。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="23" name="評議会の運営">
            <DocParagraph number="1">
              評議会の準備及び運営は、議事運営課がこれを行う。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="24" name="評議会の開催">
            <DocParagraph number="1">
              評議会は、次に掲げる何れかに該当する場合に開催する。
              <DocList type="漢数字">
                <DocListItem number="1">会長が必要と認めたとき</DocListItem>
                <DocListItem number="2">全役員の過半数が必要と認めたとき</DocListItem>
                <DocListItem number="3">全評議員の3分の1以上から要求があったとき</DocListItem>
                <DocListItem number="4">全会員の20分の1以上から要求があったとき</DocListItem>
                <DocListItem number="5">定例総会の開催前</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              評議会の開催要求は、議事運営課にこれを届出るものとする。
            </DocParagraph>

            <DocParagraph number="3">
              <DocLink paragraph="1">第1項</DocLink>第二号又は第三号に基づく開催要求があったとき、この成立要件は、監査局がこれを審査する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="25">
            <DocParagraph number="1">
              評議会を開催するときは、開催日から起算して14日以上前に、次に掲げる事項を公示しなければならない。
              <DocList type="漢数字">
                <DocListItem number="1">開催日時</DocListItem>
                <DocListItem number="2">開催場所</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              評議会の議題は、開催日から起算して10日以上前に、これを議事運営課へ届出なければならない。 ただし、議題は次の何れかに該当するものに限る。
              <DocList type="漢数字">
                <DocListItem number="1">評議員が提出するもの</DocListItem>
                <DocListItem number="2">全会員の20分の1以上が署名したもの</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="3">
              評議会の議題は、開催日から起算して5日以上前に、これを公示しなければならない。<br />
              ただし、特別な理由のあるときは、全ての評議員に対してのみ告知すれば良い。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="26" name="評議会の議長">
            <DocParagraph number="1">
              評議会における議長は、議事運営課長を除く議事運営課員の何れかがこれを務める。
            </DocParagraph>

            <DocParagraph number="2">
              <DocLink article="22" paragraph="2">第22条第2項</DocLink
              >の規定において、議事運営課長の代理として評議会に出席する者は、前項に定める議長を兼任してはならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="27" name="評議会の議決事項">
            <DocParagraph number="1">
              評議会は、本会に関する次の事項を審議決定する。
              <DocList type="漢数字">
                <DocListItem number="1">総会へ提出する議題</DocListItem>
                <DocListItem number="2">各評議員の代表する機関又は組織からの提起事項及び報告事項</DocListItem>
                <DocListItem number="3">クラブ及び同好会の設立及び廃止</DocListItem>
                <DocListItem number="4">会員からの意見及び要望</DocListItem>
                <DocListItem number="5">細則の制定及び改廃</DocListItem>
                <DocListItem number="6">本規約その他の本会で定める規定において定められた事項</DocListItem>
                <DocListItem number="7">その他重要事項</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              評議会の議決事項は、本規約及び細則並びに総会における議決事項に反してはならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="28">
            <DocParagraph number="1">
              総会を除く本会の全ての機関及び組織は、評議会での議決事項を遵守しなければならない。<br />
              ただし、総会において、これに反する議決がなされた場合はこの限りではない。
            </DocParagraph>

            <DocParagraph number="2">
              評議会の議事は、閉会から起算して14日以内に、これを公示しなければならない。
            </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="5" name="学級会">
          <DocArticle number="29" name="学級会">
            <DocParagraph number="1">
              学級会は、学級における議決機関であり、学級における事項を審議決定する。
            </DocParagraph>

            <DocParagraph number="2">
              学級会は、各学級に在籍する全会員によって構成され、これを学級会員と呼称する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="30" name="学級会の議決">
            <DocParagraph number="1">
              学級会における議決事項は、各学級に対してのみ効力を発揮し、その外部に対しては一切の効力を持たない。<br />
              ただし、総会、評議会、執行部その他の機関から議決を委任されたときは、委任された範囲内でその外部に対しても効力を持つ。
            </DocParagraph>

            <DocParagraph number="2">
              学級会は、総会、評議会、執行部その他の機関から議決を委任されたときは、速やかに委任された事項の議決を行わなければならない。
            </DocParagraph>

            <DocParagraph number="3">
              学級会における議決事項は、本規約、細則及び執行令並びに総会及び評議会の議決事項に反してはならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="31" name="学級会の役職">
            <DocParagraph number="1">
              各学級会に次に掲げる役職を各1名置く。<br />
              その任期は、何れも4月1日から3月31日までの1か年とする。<br />
              ただし、再任を妨げない。<br />
              <DocList type="漢数字">
                <DocListItem number="1">学級委員長</DocListItem>
                <DocListItem number="2">副学級委員長</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2"> <DocLink paragraph="1">前項</DocLink>の各役職は、学級会員の互選で決定する。 </DocParagraph>

            <DocParagraph number="3">
              学級委員長は、学級会を代表し、学級会における議長を兼任する。
            </DocParagraph>

            <DocParagraph number="4">
              副学級委員長は、学級委員長を補佐し、学級委員長に事故あるとき又は欠けたときはその職務を代行する。
            </DocParagraph>

            <DocParagraph number="5">
              役職に欠員が生じた際は、速やかに補欠者を任命しなければならない。<br />
              このとき、<DocLink paragraph="1">第1項</DocLink>の規定に関わらず、補欠者の任期は、前任者の残任期間とする。<br />
              ただし、再任を妨げない。
            </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="6" name="執行部">
          <DocArticle number="32" name="執行部">
            <DocParagraph number="1">
              執行部は、本会最高の執行機関であり、執行機関を統括し、会務を執行する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="33" name="執行部の構成">
            <DocParagraph number="1">
              執行部は、会長、副会長、その他の執行部員により構成される。
            </DocParagraph>

            <DocParagraph number="2">
              会長は、執行部を代表し、執行部員を統括する。
            </DocParagraph>

            <DocParagraph number="3">
              会長、副会長を除く執行部員は、会長がこれを任命する。
            </DocParagraph>

            <DocParagraph number="4">
              各学級会に1名以上の執行部員が所属するようにしなければならない。
            </DocParagraph>

            <DocParagraph number="5">
              会長は、学級会に対し執行部員の選出を委任することができる。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="34" name="課">
            <DocParagraph number="1">
              執行部に、次に掲げる課を置く。
              <DocList type="漢数字">
                <DocListItem number="1">議事運営課</DocListItem>
                <DocListItem number="2">会計課</DocListItem>
                <DocListItem number="3">総務課</DocListItem>
                <DocListItem number="4">広報課</DocListItem>
              </DocList>
            </DocParagraph>
          </DocArticle>

          <DocArticle number="35" name="課の構成">
            <DocParagraph number="1">
              課は、課長その他の課員により構成される。
            </DocParagraph>

            <DocParagraph number="2">
              課長は、会長がこれを任命する。
            </DocParagraph>

            <DocParagraph number="3">
              課長を除く課員は、課長がこれを任命する。<br />
              ただし、課員は執行部員から選出しなければならない。
            </DocParagraph>

            <DocParagraph number="4">
              課員は、複数の課に所属してもよい。<br />
              ただし、本規約その他の本会で定める規定において、特に規定されているときはこの限りではない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="36" name="課の役職">
            <DocParagraph number="1">
              課に、次に掲げる役職を各1名置く。<br />
              その任期は、何れも10月1日から9月30日までの1か年とする。<br />
              ただし、再任を妨げない。
              <DocList type="漢数字">
                <DocListItem number="1">課長</DocListItem>
                <DocListItem number="2">副課長</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2"> <DocLink paragraph="1">前項</DocLink>第二号の役職は、課長がこれを任命する。 </DocParagraph>

            <DocParagraph number="3">
              課長は、課を代表し、その業務を統括する。
            </DocParagraph>

            <DocParagraph number="4">
              副課長は、課長を補佐し、課長に事故あるとき又は欠けたときはその職務を代行する。
            </DocParagraph>

            <DocParagraph number="5">
              役職に欠員が生じた際は、速やかに補欠者を任命しなければならない。<br />
              このとき、<DocLink paragraph="1">第1項</DocLink>の規定に関わらず、補欠者の任期は、前任者の残任期間とする。<br />
              ただし、再任を妨げない。<br />
            </DocParagraph>
          </DocArticle>

          <DocArticle number="37" name="執行部の業務">
            <DocParagraph number="1">
              執行部は、次に掲げる業務を執行する。
              <DocList type="漢数字">
                <DocListItem number="1">本会行事の計画及び実施に関する事項</DocListItem>
                <DocListItem number="2">議決機関において決議された事項</DocListItem>
                <DocListItem number="3">総会及び評議会の運営及び議事の記録</DocListItem>
                <DocListItem number="4">本会の財務に関する事項</DocListItem>
                <DocListItem number="5">執行機関の統括</DocListItem>
                <DocListItem number="6">本会の所有する物品の管理</DocListItem>
                <DocListItem number="7">本会外の個人又は団体に対する連絡及び交渉</DocListItem>
                <DocListItem number="8">本会活動の広報</DocListItem>
                <DocListItem number="9">本規約その他の本会で定める規定において定められた事項</DocListItem>
                <DocListItem number="10">その他本会活動に必要な事項</DocListItem>
              </DocList>
            </DocParagraph>
          </DocArticle>

          <DocArticle number="38" name="執行令">
            <DocParagraph number="1">
              執行部は、その業務上必要であり、かつ、本規約及び細則並びに総会又は評議会の議決事項に反しない場合に限り、執行令を制定し公布することができる。
            </DocParagraph>

            <DocParagraph number="2">
              執行令は、本会で定める規定として、本会の活動に対し効力を持つ。
            </DocParagraph>

            <DocParagraph number="3">
              執行令の制定は、会長及び1名以上の課長の署名捺印を必要とする。
            </DocParagraph>

            <DocParagraph number="4">
              執行令を制定したときは、速やかにこれを公示しなければならない。
            </DocParagraph>

            <DocParagraph number="5">
              執行令は、総会又は評議会において、これの無効化が決議されたときには、これを無効とする。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="39" name="執行部の人事">
            <DocParagraph number="1">
              会長は、課長を任免したときは、速やかにその人事を公示しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              課長は、<DocLink article="36" paragraph="1">第36条第1項</DocLink
              >第二号に定める役職又は課員を任免したときは、速やかにその人事を会長に届出なければならない。
            </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="7" name="委員会">
          <DocArticle number="40" name="委員会">
            <DocParagraph number="1">
              委員会は、業務内容ごとに存在する執行機関であり、執行部の統括の下、個々の任務を執行する。
            </DocParagraph>

            <DocParagraph number="2">
              本会に次に掲げる委員会を置く。
              <DocList type="漢数字">
                <DocListItem number="1">図書委員会</DocListItem>
                <DocListItem number="2">広報委員会</DocListItem>
                <DocListItem number="3">体育委員会</DocListItem>
                <DocListItem number="4">生活委員会</DocListItem>
                <DocListItem number="5">高専祭実行委員会</DocListItem>
                <DocListItem number="6">その他評議会で設置が議決された有期限のもの</DocListItem>
              </DocList>
            </DocParagraph>
          </DocArticle>

          <DocArticle number="41" name="委員会の構成">
            <DocParagraph number="1">
              各委員会は、委員長その他の委員により構成される。
            </DocParagraph>

            <DocParagraph number="2">
              委員長は、会長がこれを任命する。
            </DocParagraph>

            <DocParagraph number="3">
              委員長を除く委員は、委員長がこれを任命する。
            </DocParagraph>

            <DocParagraph number="4">
              何れの委員会についても、各学級会に2名以上の委員が所属するようにしなければならない。<br />
              ただし、本規約その他の本会で定める規定において、特に規定されているときはこの限りではない。
            </DocParagraph>

            <DocParagraph number="5">
              委員長は、学級会に対し委員の選出を委任することができる。
            </DocParagraph>

            <DocParagraph number="6">
              委員は、複数の委員会に所属してもよい。<br />
              ただし、本規約その他の本会で定める規定において、特に規定されているときはこの限りではない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="42" name="委員会の業務">
            <DocParagraph number="1">
              図書委員会は、次に掲げる業務を執行する。
              <DocList type="漢数字">
                <DocListItem number="1">図書館活動</DocListItem>
                <DocListItem number="2">視聴覚に関する事項</DocListItem>
                <DocListItem number="3">会員の文化的教養を向上させる活動</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              広報委員会は、次に掲げる業務を執行する。
              <DocList type="漢数字">
                <DocListItem number="1">機関紙、機関誌その他の広報資料の発行</DocListItem>
                <DocListItem number="2">学校及び本会に関する広報活動</DocListItem>
                <DocListItem number="3">校内放送に関する事項</DocListItem>
                <DocListItem number="4">広報課から委託された事項</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="3">
              体育委員会は、次に掲げる業務を執行する。
              <DocList type="漢数字">
                <DocListItem number="1">校内競技会等の企画及び運営</DocListItem>
                <DocListItem number="2">会員の体育活動に関する事項</DocListItem>
                <DocListItem number="3">会員の健康を保持促進させる活動</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="4">
              生活委員会は、次に掲げる業務を執行する。
              <DocList type="漢数字">
                <DocListItem number="1">校内美化に関する事項</DocListItem>
                <DocListItem number="2">学生生活の刷新向上に関する事項</DocListItem>
                <DocListItem number="3">学校内の風紀を向上させ振興する活動</DocListItem>
                <DocListItem number="4">学校内の設備を整備し、会員の学校生活を向上させる活動</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="5">
              高専祭実行委員会は、次に掲げる業務を執行する。<br />
              また、<DocLink article="41" paragraph="4">第41条第4項</DocLink
              >の規定に関わらず、各学級会に3名以上の高専祭実行委員が所属するようにしなければならない。
              <DocList type="漢数字">
                <DocListItem number="1">高専祭の運営に関する事項</DocListItem>
                <DocListItem number="2">高専祭の準備に関する事項</DocListItem>
                <DocListItem number="3">高専祭の事後処理に関する事項</DocListItem>
              </DocList>
            </DocParagraph>
          </DocArticle>

          <DocArticle number="43" name="委員会の役職">
            <DocParagraph number="1">
              各委員会に次に掲げる役職を各1名置く。<br />
              その任期は、何れも4月1日から3月31日までの1か年とする。<br />
              ただし、再任を妨げない。
              <DocList type="漢数字">
                <DocListItem number="1">委員長</DocListItem>
                <DocListItem number="2">副委員長</DocListItem>
                <DocListItem number="3">会計責任者</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2"> <DocLink paragraph="1">前項</DocLink>第二号及び第三号の役職は、委員長がこれを任免する。 </DocParagraph>

            <DocParagraph number="3">
              委員長は、委員会を代表し、その業務を統括する。
            </DocParagraph>

            <DocParagraph number="4">
              副委員長は、委員長を補佐し、委員長に事故あるとき又は欠けたときはその職務を代行する。
            </DocParagraph>

            <DocParagraph number="5">
              会計責任者は、委員会の予算及び所有物品の管理を行う。
            </DocParagraph>

            <DocParagraph number="6">
              役職に欠員が生じた際は、速やかに補欠者を任命しなければならない。<br />
              このとき、<DocLink paragraph="1">第1項</DocLink>の規定に関わらず、補欠者の任期は、前任者の残任期間とする。<br />
              ただし、再任を妨げない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="44" name="人事">
            <DocParagraph number="1">
              会長は、委員長を任免したときは、速やかにその人事を公示しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              委員長は、委員会の役職に変更のあるとき及び委員を任免したときは、速やかにその人事を総務課に届出なければならない。
            </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="8" name="部及びクラブ">
          <DocArticle number="45" name="部">
            <DocParagraph number="1">
              部は、スポーツや文化、学問等に興味と関心をもつ同好の会員が、自主的な活動を行う執行機関であり、執行部の統括の下、個々の活動を行う。
            </DocParagraph>

            <DocParagraph number="2">
              本会に次に掲げる部を置く。
              <DocList type="漢数字">
                <DocListItem number="1">文化部</DocListItem>
                <DocListItem number="2">体育部</DocListItem>
              </DocList>
            </DocParagraph>
          </DocArticle>

          <DocArticle number="46" name="クラブ">
            <DocParagraph number="1">
              部は、その活動内容に応じてクラブを置く。
            </DocParagraph>

            <DocParagraph number="2">
              クラブの一覧は、これを別に定め、総務課がこれを管理する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="47" name="部の構成">
            <DocParagraph number="1">
              各部は、その部に属するクラブに所属する会員により構成され、これを部員と呼称する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="48" name="部会">
            <DocParagraph number="1">
              各部に部の意思決定機関として部会を設置する。
            </DocParagraph>

            <DocParagraph number="2">
              部会は、部に属する全てのクラブのクラブ長により構成される。
            </DocParagraph>

            <DocParagraph number="3">
              <DocLink article="22" paragraph="2">第22条第2項</DocLink
              >の規定において、部長の代理として評議会に出席する者は、部会の構成員でなければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="49" name="部の役職">
            <DocParagraph number="1">
              部に、次に掲げる役職を各1名置く。<br />
              その任期は、何れも4月1日から3月31日までの1か年とする。<br />
              ただし、再任を妨げない。
              <DocList type="漢数字">
                <DocListItem number="1">部長</DocListItem>
                <DocListItem number="2">副部長</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              部長は、総務課長により任免され、部を代表し、部に属するクラブを統括する。
            </DocParagraph>

            <DocParagraph number="3">
              副部長は、部長により任免され、部長を補佐し、部長に事故あるとき又は欠けたときはその職務を代行する。
            </DocParagraph>

            <DocParagraph number="4"> <DocLink paragraph="1">第1項</DocLink>に掲げる役職は、部会の構成員でなければならない。 </DocParagraph>

            <DocParagraph number="5">
              <DocLink paragraph="1">第1項</DocLink
              >に掲げる役職にある者が、部会の構成員でなくなったときは、その他の構成員から同役職が任命される。<br />
              その任期は、前任の残任期間とする。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="50" name="部の人事">
            <DocParagraph number="1">
              総務課長は、部長を任免したときは、速やかにその人事を公示しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              部長は、部の役職に変更のあるときは、速やかにその人事を総務課に届出なければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="51" name="クラブの編成">
            <DocParagraph number="1">
              各クラブは、クラブ長その他のクラブ員により構成される。
            </DocParagraph>

            <DocParagraph number="2">
              会員は、クラブへの加入又は脱退を望むとき、クラブ長にこれを届出ものとする。<br />
              その認否は、クラブ長がこれを決定する。
            </DocParagraph>

            <DocParagraph number="3">
              クラブ長は、正当な理由なく、会員のクラブへの加入及び脱退を拒んではならず、これを強要してはならない。<br />
              これを拒むときは、該当会員に対し、拒む理由を通達しなければならない。
            </DocParagraph>

            <DocParagraph number="4">
              クラブ員は、複数のクラブ及び部に所属してもよい。<br />
              ただし、本規約その他の本会で定める規定において、特に規定されているときはこの限りではない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="52" name="クラブの役職">
            <DocParagraph number="1">
              各クラブに、次に掲げる役職を各1名置く。<br />
              その任期は、何れも4月1日から9月30日まで又は10月1日から3月31日までの6か月とする。<br />
              ただし、再任を妨げない。
              <DocList type="漢数字">
                <DocListItem number="1">クラブ長</DocListItem>
                <DocListItem number="2">副クラブ長</DocListItem>
                <DocListItem number="3">会計責任者</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2"> <DocLink paragraph="1">前項</DocLink>の役職は、クラブ員の互選で決定する。 </DocParagraph>

            <DocParagraph number="3">
              クラブ長は、クラブを代表し、その活動を統括する。
            </DocParagraph>

            <DocParagraph number="4">
              副クラブ長は、クラブ長を補佐し、クラブ長に事故あるとき又は欠けたときはその業務を代行する。
            </DocParagraph>

            <DocParagraph number="5">
              会計責任者は、クラブの予算及び所有物品の管理を行う。
            </DocParagraph>

            <DocParagraph number="6">
              役職に欠員が生じた際は、速やかに補欠者を任命しなければならない。<br />
              ただし、再任を妨げない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="53" name="クラブ員名簿及び年間活動計画の届出">
            <DocParagraph number="1">
              クラブ長は、毎年度総務課の定める期日までに、クラブ員名簿及び年間活動計画を総務課に届出なければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="54" name="クラブ員の変更">
            <DocParagraph number="1">
              クラブ長は、クラブへの加入若しくは脱退又はクラブの役職に変更のあるときは、速やかにその変更内容を総務課に届出なければならない。<br />
              このとき、会員のクラブへの加入又は脱退の場合は該当者の記名押印又は署名を必要とし、クラブの役職変更の場合は退任者及び新任者の記名押印又は署名を必要とする。<br />
              ただし、脱退者又は退任者が届出の時点で会員でない場合は、その者に限り記名のみで良い。
            </DocParagraph>

            <DocParagraph number="2">
              クラブの役職にある者は、クラブを脱退するとき、その役職を退任しなければならない。
            </DocParagraph>

            <DocParagraph number="3">
              クラブの役職にある者がその役職を退任するときは、後任者の就任を同時に届出なければならない。<br />
              ただし、後任者が選出できないときはこの限りではない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="55" name="クラブの要件">
            <DocParagraph number="1">
              クラブは、次に掲げる事項を全て満たさなければならない。
              <DocList type="漢数字">
                <DocListItem number="1">活動内容及びその目的が明確であること</DocListItem>
                <DocListItem number="2">活動内容が他のクラブと重複しないこと</DocListItem>
                <DocListItem number="3">5名以上の会員が所属していること</DocListItem>
                <DocListItem number="4">クラブ員が3学年以上にわたっていること</DocListItem>
                <DocListItem number="5">クラブの役職に欠員がないこと</DocListItem>
              </DocList>
            </DocParagraph>
          </DocArticle>

          <DocArticle number="56" name="クラブの設立">
            <DocParagraph number="1">
              新たにクラブを設立しようとするときは、発起人10名以上を必要とし、その記名押印又は署名がなされた設立要望書を、総務課に提出しなければならない。<br />
              <DocLink article="55">第55条</DocLink>に掲げる要件を満たさないクラブの設立要望書は受理されない。
            </DocParagraph>

            <DocParagraph number="2">
              クラブは、所属を希望する部の部長又は総務課長の承認を経て、評議会及び総会がこれの設立を可決したときに、これが設立される。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="57">
            <DocParagraph number="1">
              設立を要望するクラブが所属を希望する部の部長又は総務課長は、設立要望書の要件を確認し、これが<DocLink article="55">第55条</DocLink
              >に掲げる要件を満たすとき、この設立を評議会に諮らなければならない。<br />
              これを拒むときは、設立要望書の提出者に対し、拒む理由を通達しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              評議会議長は、評議会においてクラブの設立が可決されたときは、この設立を総会に諮らなければならない。
            </DocParagraph>

            <DocParagraph number="3">
              会長は、総会においてクラブの設立が可決されたときは、その団体結成願を校長に提出しなければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="58" name="クラブの活動停止">
            <DocParagraph number="1">
              クラブは、次に掲げる者により、1年以下の有期限又は無期限の活動停止を命じられることがある。
              <DocList type="漢数字">
                <DocListItem number="1">評議会</DocListItem>
                <DocListItem number="2">会長</DocListItem>
                <DocListItem number="3">総務課長</DocListItem>
                <DocListItem number="4">所属部長</DocListItem>
                <DocListItem number="5">学校長</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              クラブは、次に掲げる場合に活動停止を命じられる。
              <DocList type="漢数字">
                <DocListItem number="1">本規約その他の本会で定める規定又は総会若しくは評議会の議決事項に反したとき</DocListItem>
                <DocListItem number="2">執行部、監査局又は所属部長の指示に従わなかったとき</DocListItem>
                <DocListItem number="3">本会行事又は総会その他の会議が開催されるとき</DocListItem>
                <DocListItem number="4">クラブの役職に欠員があるとき</DocListItem>
                <DocListItem number="5">クラブが果たすべき義務を怠ったとき</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="3">
              第1項に掲げる者は、正当な理由があるときは、活動停止の命令を解くことができる。
            </DocParagraph>

            <DocParagraph number="4">
              クラブの活動停止を命じるとき及びその命令を解くときは、命令者又は解除者が、これを理由とともに公示しなければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="59" name="クラブの解散">
            <DocParagraph number="1">
              クラブは、総会においてこれの解散が可決されたとき、これを解散しなければならない。<br />
              また、クラブは、このとき以外に、これを解散してはならない。
            </DocParagraph>

            <DocParagraph number="2">
              クラブは、次に掲げるときは、総会に対しその解散が発議される。
              <DocList type="漢数字">
                <DocListItem number="1">活動停止期間が継続して1か年を超えたとき</DocListItem>
                <DocListItem number="2">5月1日時点で<DocLink article="55">第55条</DocLink>に掲げる要件を満たさないとき</DocListItem>
                <DocListItem number="3">
                  <DocLink article="58" paragraph="1">第58条第1項</DocLink
                  >に掲げる者により次に掲げる事項が指摘されてから、その事項の改善が認められないまま6か月が経過したとき
                  <DocList type="イロハ">
                    <DocListItem number="1">6か月以上継続して、学校内における活動が認められないこと</DocListItem>
                    <DocListItem number="2">過去1か年以内に活動実績が認められないこと</DocListItem>
                  </DocList>
                </DocListItem>
                <DocListItem number="4">クラブ長が、所属部長又は総務課に対し、解散を願い出たとき</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="3">
              総会においてクラブの解散が否決され、否決から起算して1か年が経過したとき、<DocLink paragraph="2">前項</DocLink
              >に掲げる事態が改善されていない場合は、再度クラブの解散が発議される。
            </DocParagraph>

            <DocParagraph number="4">
              <DocLink paragraph="2">第2項</DocLink>及び<DocLink paragraph="3">第3項</DocLink
              >に定めるクラブの解散の発議は、所属部長又は総務課長がこれを行う。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="60">
            <DocParagraph number="1">
              クラブは、解散するとき、これの所有する財産を執行部に譲渡しなければならない。
            </DocParagraph>

            <DocParagraph number="2">
              クラブが解散するとき、これに割り当てられていた予算は、予備費に編入されるものとする。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="61" name="クラブの合併">
            <DocParagraph number="1">
              クラブは、総会においてこれの合併が可決されたとき、これらを合併し、1つのクラブとしなければならない。<br />
              また、クラブは、このとき以外に、これらを合併してはならない。
            </DocParagraph>

            <DocParagraph number="2">
              合併されたクラブの所有する財産は、合併元のクラブが所有していた物品を合わせたものとする。
            </DocParagraph>

            <DocParagraph number="3">
              合併されたクラブに割り当てられる予算は、合併元のクラブに割り当てられていた予算を合算したものとする。
            </DocParagraph>

            <DocParagraph number="4">
              クラブは、その合併を希望するときは、所属部長又は総務課に対しこれを願い出るものとする。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="62" name="クラブの分割">
            <DocParagraph number="1">
              クラブは、総会においてこれの分割が可決されたとき、これを分割し、複数のクラブとしなければならない。<br />
              また、クラブは、このとき以外に、これらを分割してはならない。
            </DocParagraph>

            <DocParagraph number="2">
              分割されたクラブらの所有する財産は、分割元のクラブが所有していた物品を分配したものとする。
            </DocParagraph>

            <DocParagraph number="3">
              分割されたクラブらに割り当てられる予算は、分割元のクラブに割り当てられていた予算を分配したものとする。
            </DocParagraph>

            <DocParagraph number="4">
              クラブは、その分割を希望するときは、所属部長又は総務課に対しこれを願い出るものとする。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="63" name="クラブの名称変更">
            <DocParagraph number="1">
              クラブは、総会においてこれの名称変更が可決されたとき、これの名称を変更しなければならない。<br />
              また、クラブは、このとき以外に、これの名称を変更してはならない。
            </DocParagraph>

            <DocParagraph number="2">
              クラブは、評議会において通称の使用を認められたとき、これを通称として使用することができる。
            </DocParagraph>
          </DocArticle>
        </DocSection>

        <DocSection number="9" name="監査局">
          <DocArticle number="64" name="監査局">
            <DocParagraph number="1">
              監査局は、本会の監査機関であり、会務を監査する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="65" name="監査局の構成">
            <DocParagraph number="1">
              監査局は、監査局長、その他の監査局員により構成される。
            </DocParagraph>

            <DocParagraph number="2">
              監査局長は、監査局を代表し、監査局員を統括する。
            </DocParagraph>

            <DocParagraph number="3">
              監査局長を除く監査局員は、監査局長がこれを任命する。
            </DocParagraph>

            <DocParagraph number="4">
              監査局員は、執行機関に所属してはならない。
            </DocParagraph>

            <DocParagraph number="5">
              <DocLink paragraph="4">前項</DocLink>の規定に関わらず、監査局員は、クラブに所属することができる。<br />
              ただし、部会に所属すること及びクラブの役職を担うことはできない。
            </DocParagraph>

            <DocParagraph number="6">
              各学級会に1名以上の監査局員が所属するようにしなければならない。
            </DocParagraph>

            <DocParagraph number="7">
              監査局長は、学級会に対し監査局員の選出を委任することができる。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="66">
            <DocParagraph number="1">
              監査局に、次に掲げる役職を各1名置く。<br />
              その任期は、何れも10月1日から9月30日までの1か年とする。<br />
              ただし、再任を妨げない。
              <DocList type="漢数字">
                <DocListItem number="1">監査局長</DocListItem>
                <DocListItem number="2">副監査局長</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2"> <DocLink paragraph="1">前項</DocLink>第二号の役職は、監査局長がこれを任命する。 </DocParagraph>

            <DocParagraph number="3">
              監査局長は、監査局を代表し、その業務を統括する。
            </DocParagraph>

            <DocParagraph number="4">
              副監査局長は、監査局長を補佐し、監査局長に事故あるとき又は欠けたときはその職務を代行する。
            </DocParagraph>

            <DocParagraph number="5">
              役職に欠員が生じた際は、速やかに補欠者を任命しなければならない。<br />
              このとき、<DocLink paragraph="1">第1項</DocLink>の規定に関わらず、補欠者の任期は、前任者の残任期間とする。<br />
              ただし、再任を妨げない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="67" name="監査局の業務">
            <DocParagraph number="1">
              監査局は、次に掲げる業務を執行する。
              <DocList type="漢数字">
                <DocListItem number="1">
                  次に掲げる事項の要件審査
                  <DocList type="イロハ">
                    <DocListItem number="1">議決機関における議決内容が本会の定める規定に反しないこと</DocListItem>
                    <DocListItem number="2">本会で新たに定める規定が既存の規定に即していること</DocListItem>
                    <DocListItem number="3">出席人数、署名その他定足数を定める事項において定足数を満たすこと</DocListItem>
                    <DocListItem number="4">本会の機関から要件審査を委託された事項</DocListItem>
                  </DocList>
                </DocListItem>
                <DocListItem number="2">
                  次に掲げる事項の監査
                  <DocList type="イロハ">
                    <DocListItem number="1">本会の財務</DocListItem>
                    <DocListItem number="2">執行機関の活動及び報告</DocListItem>
                    <DocListItem number="3">本会の機関から監査を委託された事項</DocListItem>
                  </DocList>
                </DocListItem>
                <DocListItem number="3">役員選挙の準備及び運営</DocListItem>
                <DocListItem number="4">情報開示請求に対する情報の収集及び開示</DocListItem>
                <DocListItem number="5">本規約その他の本会で定める規定において定められた事項</DocListItem>
              </DocList>
            </DocParagraph>

            <DocParagraph number="2">
              監査局は、<DocLink paragraph="1">第1項</DocLink
              >第一号又は第二号に掲げる事項において、審査結果又は監査結果の報告を議決機関又は執行部から求められたとき、これを報告しなければならない。<br />
              これの報告が本規約その他の本会で定める規定において定められる場合も、同様に報告しなければならない。
            </DocParagraph>

            <DocParagraph number="3">
              監査局は、<DocLink paragraph="1">第1項</DocLink
              >第一号における審査の結果、要件を満たさないと判断したとき、これを該当機関に報告しなければならない。<br />
              必要あるときは、報告の上、これを公示しなければならない。
            </DocParagraph>

            <DocParagraph number="4">
              監査局は、<DocLink paragraph="1">第1項</DocLink
              >第二号における監査の結果、不適切であると認められる事項があるとき、これを該当機関に指摘しなければならない。<br />
              必要あるときは、指摘の上、これを公示しなければならない。
            </DocParagraph>

            <DocParagraph number="5">
              監査局は、本会の何れの組織及び機関に対しても、第1項の業務に必要な書類の提出を命ずることができる。<br />
              この命令を受けた組織又は機関はこの命令に従わなければならない。
            </DocParagraph>

            <DocParagraph number="6">
              監査機関の活動及び報告に関する監査並びに監査機関に関する<DocLink paragraph="1">第1項</DocLink
              >第四号の業務は、これを議事運営課が行う。<br />
              このとき、<DocLink paragraph="4">第4項</DocLink>及び<DocLink paragraph="5">第5項の規定</DocLink>は、議事運営課について準用する。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="68" name="監査局の人事">
            <DocParagraph number="1">
              監査局長は、副監査局長又は監査局員を任免したときは、速やかにその人事を会長に届出なければならない。
            </DocParagraph>
          </DocArticle>

          <DocArticle number="69" name="情報開示請求">
            <DocParagraph number="1">
              会員は、本会に対し情報開示請求をすることができる。
            </DocParagraph>

            <DocParagraph number="2">
              情報開示請求は、監査局に対しこれを行う。
            </DocParagraph>

            <DocParagraph number="3">
              監査局は、情報開示請求のあったとき、各機関又は組織からその情報の収集を行わなければならない。<br />
              本会の全ての機関及び組織は、監査局に対し、求められた情報を開示しなければならない。
            </DocParagraph>

            <DocParagraph number="4">
              監査局は、情報開示請求に対し、収集した情報の開示を行う。<br />
              ただし、個人情報保護、機密情報保護その他の非公開とすることが妥当である理由があるとき、その理由を通達し、これの開示を拒むことができる。
            </DocParagraph>

            <DocParagraph number="5">
              第2項の規定に関わらず、監査局についての情報開示請求は、議事運営課に対しこれを行うものとする。
              このとき、第3項及び第4項の規定は、議事運営課について準用する。
            </DocParagraph>
          </DocArticle>
        </DocSection>
      </DocChapter>

      <DocChapter number="3" name="議決">
        <DocArticle number="70" name="議決機関の定足数">
          <DocParagraph number="1">
            本会の全ての議決機関は、会議の開催に構成員の3分の2以上の出席を必要とする。
          </DocParagraph>

          <DocParagraph number="2">
            会議は、出席者が規定人数に満たないとき、これを流会とする。<br />
            会議の途中で、出席者が規定人数以下となったときは、その時点でこれを流会とし、その時点で採決が終了している事項のみをその会議における議決事項とする。
          </DocParagraph>

          <DocParagraph number="3">
            議決機関の構成員は、その記名押印又は署名がなされた議決権行使書の提出を以て、出席に代えることができる。
          </DocParagraph>

          <DocParagraph number="4">
            前項の議決権行使書は会議の開催日から起算して3日以上前に議長に提出しなければならない。<br />
            ただし、議事運営課長が議長を務めるときは、議事運営課への提出を以て議長への提出と代えることができる。
          </DocParagraph>

          <DocParagraph number="5">
            出席人数の確認は、議長がこれを行う。<br />
            ただし、本規約又は細則において、特に運営機関が規定されているときは、運営機関がこれを行い、議長に報告する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="71" name="採決">
          <DocParagraph number="1">
            採決は、議長を除く議決機関の構成員1名につき、1つの議案に対し1票のみ投票することができる。
          </DocParagraph>

          <DocParagraph number="2">
            投票は、賛成、反対又は保留の何れかとする。
          </DocParagraph>

          <DocParagraph number="3">
            議案は、賛成票数が反対票数及び保留票数を上回ったとき、これを可決する。
          </DocParagraph>

          <DocParagraph number="4">
            議案は、保留票数が賛成票数及び反対票数を上回ったとき、これを保留とし、その会議においてこれの決議を行わない。
          </DocParagraph>

          <DocParagraph number="5">
            <DocLink paragraph="3">第3項</DocLink>及び<DocLink paragraph="4">第4項</DocLink
            >の規定において、最多票数を獲得した票種が複数あったときは、議長が決定権を有する。<br />
            ただし、最多票数を獲得した票種の何れかから選択するものとする。
          </DocParagraph>

          <DocParagraph number="6">
            採決における票数の集計は、議長がこれを行う。<br />
            ただし、本規約又は細則において、特に運営機関が規定されているときは、運営機関がこれを行い、議長にこれを報告する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="72" name="動議">
          <DocParagraph number="1">
            会議の出席者は、動議を提案することができる。
          </DocParagraph>

          <DocParagraph number="2">
            動議の提案は、提案者を除く2名以上の賛成を必要とする。
          </DocParagraph>

          <DocParagraph number="3">
            動議は、出席者の4分の3の賛成により可決される。<br />
            ただし、<DocLink article="70" paragraph="3">第70条第3項</DocLink
            >に基づき議決権行使書の提出を以て出席に代えたものは、本項において出席者から除外する。
          </DocParagraph>

          <DocParagraph number="4">
            動議の内容は、次に掲げる事項の何れかとする。
            <DocList type="漢数字">
              <DocListItem number="1">会議の休憩</DocListItem>
              <DocListItem number="2">延会</DocListItem>
              <DocListItem number="3">議題説明の省略</DocListItem>
              <DocListItem number="4">議題説明の要求</DocListItem>
              <DocListItem number="5">討論の実施</DocListItem>
            </DocList>
          </DocParagraph>
        </DocArticle>

        <DocArticle number="73" name="要件の審査">
          <DocParagraph number="1">
            総会及び評議会における、定足数の確認及び票数の集計は、監査局がこれの正当性を監査する。
          </DocParagraph>

          <DocParagraph number="2">
            監査局は、監査の結果、不適切であると認められる事項があるときは、これを議長に報告しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="74" name="決議">
          <DocParagraph number="1">
            議決機関の決議は、これをその構成員の総意とする。
          </DocParagraph>

          <DocParagraph number="2"> <DocLink paragraph="1">前項</DocLink>の規定に基づき、総会の決議は、これを会員の総意とする。 </DocParagraph>

          <DocParagraph number="3">
            総会及び評議会の決議は、決議から起算して10日以内に、議事運営課がこれを学校に提出しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="75" name="議事録">
          <DocParagraph number="1">
            本会の全ての会議は、その議事を議事録として記録しなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            議事録の作成は、議長がこれを行う。<br />
            ただし、本規約又は細則において、特に運営機関が規定されているときは、運営機関がこれを作成し、議長に提出する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="76" name="最終決定権">
          <DocParagraph number="1">
            本会の決定は、会員の総意に基づく。
          </DocParagraph>

          <DocParagraph number="2">
            本会の最終決定権は、<DocLink paragraph="1">前項</DocLink>及び<DocLink article="74" paragraph="2">第74条第2項</DocLink
            >に基づき、会員の総意たる総会が有する。
          </DocParagraph>

          <DocParagraph number="3">
            本規約は、本会の最終決定権を有する総会により決定されたものであり、会員の総意に基づく効力を有する。
          </DocParagraph>

          <DocParagraph number="4">
            学校は、本会の議決に対し再審議を要求する権利を有する。<br />
            再審議を要求するときは、校長及び学生主事の署名捺印がなされた再審議要求書を、決議から起算して30日以内に会長に提出するものとする。
          </DocParagraph>
        </DocArticle>
      </DocChapter>

      <DocChapter number="4" name="会計">
        <DocArticle number="77" name="財産">
          <DocParagraph number="1">
            本会は、金銭、物品その他の財産を所有する。
          </DocParagraph>

          <DocParagraph number="2">
            本会の金銭の管理は、これを学校に委託することができる。<br />
            学校は、本会からこれを委託され、金銭出納の依頼があったとき、速やかにこれを行わなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="78" name="会計年度">
          <DocParagraph number="1">
            本会の会計年度は、毎年3月1日に始まり翌年2月末日に終わるものとする。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="79" name="予算">
          <DocParagraph number="1">
            本会は、毎年度、その年度の予算を作成しなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            本会の予算は、評議会及び総会による承認を必要とする。
          </DocParagraph>

          <DocParagraph number="3">
            予算案は、会計課がこれを作成し、評議会に提出する。
          </DocParagraph>

          <DocParagraph number="4">
            予算は、収入の部と支出の部により構成される。
          </DocParagraph>

          <DocParagraph number="5">
            収入の部は、入会金、会費、寄付金、預金利子、繰越金その他の収入を以てこれに充てる。
          </DocParagraph>

          <DocParagraph number="6">
            単位組織又はその使途について予算額を割り当てる。
          </DocParagraph>

          <DocParagraph number="7">
            予算は、総会による承認から起算して30日以内に、これを収支予算書として学校に提出しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="80" name="暫定予算">
          <DocParagraph number="1">
            その会計年度において予算が承認されていないとき、臨時として暫定予算が用いられる。<br />
            このとき、<DocLink article="87">第87条</DocLink>及び<DocLink article="88">第88条</DocLink>の規定は、暫定予算について準用する。
          </DocParagraph>

          <DocParagraph number="2">
            暫定予算は、支出の部のみにより構成される。
          </DocParagraph>

          <DocParagraph number="3">
            暫定予算の予算額は、それぞれの項目において、前年度の予算額の3分の1の金額とする。<br />
            前年度予算に存在しない項目についての暫定予算の予算額は、0円とする。<br />
            ただし、前年度に存在しない団体に対する予算額は、一団体につき3,000円とする。
          </DocParagraph>

          <DocParagraph number="4">
            暫定予算は、当該年度の予算が成立したときは、失効するものとする。
          </DocParagraph>

          <DocParagraph number="5">
            暫定予算における支出は、当該年度の予算が承認されたとき、これを当該年度の予算において支出したものとみなす。
          </DocParagraph>

          <DocParagraph number="6">
            暫定予算における支出額が当該年度の予算を超過したとき、その差額は<DocLink article="84">第84条</DocLink
            >に定める予備費から支出したものとして扱い、<DocLink article="87">第87条</DocLink>の規定に関わらず、予算を執行することができる。<br />
            このとき、<DocLink article="83" paragraph="3">第83条第3項</DocLink>の規定に関わらず、評議会における決定を必要としない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="81" name="繰越金">
          <DocParagraph number="1">
            予算において、会計年度の終了までに執行されなかった剰余金は、次年度予算において、繰越金として収入計上するものとする。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="82" name="積立金">
          <DocParagraph number="1">
            予算は、特定の用途のため複数年度にわたり予算の繰越を行う積立金を、支出の部に計上することができる。
          </DocParagraph>

          <DocParagraph number="2">
            積立金は、その項目の作成時に評議会の承認を必要とする。<br />
            このとき、次に掲げる事項を明確にしなければならない。
            <DocList type="漢数字">
              <DocListItem number="1">使途</DocListItem>
              <DocListItem number="2">1年度あたりの積立金額</DocListItem>
              <DocListItem number="3">積立期間</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="3">
            積立金は、評議会で承認された使途以外のためにこれを用いてはならない。
          </DocParagraph>

          <DocParagraph number="4">
            積立金は、これを執行するまでの毎年度、同項目の積立金としてこれを計上しなければならない。<br />
            この予算額は、前年度の同項目の積立金の予算額以上でなければならない。
          </DocParagraph>

          <DocParagraph number="5">
            積立金は、執行を伴わずにその計上を取り止めるときは、評議会の承認を必要とする。<br />
            ただし、第2項に定める承認得た期間を満了したとき、評議会によりこの計上の取り止めが承認されたものとみなす。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="83" name="予備費">
          <DocParagraph number="1">
            予算は、予期し難い予算の不足に備えるため、支出の部に予備費を計上しなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            予備費は、この予算額を予算総額の10分の1以上としなければならない。<br />
            ただし、予算総額の10分の1が繰越金を除く収入予算額を超過する場合は、この予算額は、繰越金を除く収入予算額以上とすれば良い。
          </DocParagraph>

          <DocParagraph number="3">
            予備費の支出は、評議会がこれを決定する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="84" name="決算">
          <DocParagraph number="1">
            本会の決算は、評議会及び総会において、これを報告しなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            決算は、会計課がこれを行い、報告する。
          </DocParagraph>

          <DocParagraph number="3">
            決算は、会計年度の終了から90日以内にこれを報告しなければならない。
          </DocParagraph>

          <DocParagraph number="4">
            決算は、総会における報告から起算して30日以内に、これを収支決算書として学校に提出しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="85" name="会費">
          <DocParagraph number="1">
            会員は、本会に会費を納めなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            会費は、6か月につき3,600円とし、会員はこれを毎年4月と10月に納入するものとする。
          </DocParagraph>

          <DocParagraph number="3">
            <DocLink paragraph="2">前項</DocLink>の規定に関わらず、会員は、1か年につき7,200円の会費を4月に一括納入することができる。
          </DocParagraph>

          <DocParagraph number="4">
            <DocLink paragraph="3">前項</DocLink
            >の規定において会費を一括納入した学生が、10月から翌年3月までの間、会員でなかったとき、10月からの6か月の会費をこれに返還する。
          </DocParagraph>

          <DocParagraph number="5">
            会費の納入及び返還は、学校にこれを委託することができる。<br />
            学校は、会員又は本会からこれを委託され、金銭を受領したとき、速やかに本会へ納入又は学生へ返還しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="86" name="入会金">
          <DocParagraph number="1">
            会員は、本会に入会するとき、本会に入会金を納めなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            入会金は、3,000円とする。
          </DocParagraph>

          <DocParagraph number="3">
            会員は、<DocLink article="4" paragraph="5">第4条第5項</DocLink>の規定により会員とされたときは、入会金を納めなくても良い。
          </DocParagraph>

          <DocParagraph number="4">
            入会金の納入は、学校にこれを委託することができる。<br />
            学校は、会員からこれを委託され、金銭を受領したとき、速やかにこれを本会へ納入しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="87" name="支出">
          <DocParagraph number="1">
            各組織は、その組織の予算額を超えて支出してはならない。
          </DocParagraph>

          <DocParagraph number="2">
            各組織は、使途について割り当てられた予算が存在するとき、その予算額を超えてその使途について支出してはならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="88" name="予算の執行">
          <DocParagraph number="1">
            金銭の支出のあるときは、支出した組織が、これを会計課に届出なければならない。
          </DocParagraph>

          <DocParagraph number="2">
            支出の届出にあたっては、その領収書又は請求書を会計課に提出しなければならない。
          </DocParagraph>

          <DocParagraph number="3">
            支出の届出は、その領収書又は請求書の発行日から起算して90日以内に、これを行わなければならない。
          </DocParagraph>

          <DocParagraph number="4">
            支出の届出は、領収書又は請求書の発行日と異なる会計年度に、これを行うことはできない。
          </DocParagraph>

          <DocParagraph number="5">
            本会は、支出の届出があったとき、速やかに予算を執行しなければならない。<br />
            ただし、支出の届出に不備があったとき及びその予算において認められない支出があったときはこの限りではない。
          </DocParagraph>

          <DocParagraph number="6">
            会計課は、決算、中間報告、次年度の予算編成その他の会計業務のため、会長の承認のもと一定期間予算の執行を凍結することができる。<br />
            これを行うときは、期間の初日から起算して10日以上前にこれを公示しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="89" name="会計監査">
          <DocParagraph number="1">
            会計監査は、監査局がこれを行うものとする。
          </DocParagraph>

          <DocParagraph number="2">
            監査局は、本会の全ての会計経理を監査する権利及び義務を有する。
          </DocParagraph>

          <DocParagraph number="3">
            監査局は、<DocLink article="84">第84条</DocLink>に定める決算報告の際に、会計監査の結果を報告しなければならない。
          </DocParagraph>

          <DocParagraph number="4">
            監査局は、本会の何れの組織及び機関に対しても、その会計書類その他の会計監査に必要な書類の提出を命ずることができる。<br />
            この命令を受けた組織又は機関はこの命令に従わなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="90" name="中間報告">
          <DocParagraph number="1">
            会計課は、総会、評議会又は監査局から求められたときは、会計の中間報告をしなければなない。
          </DocParagraph>
        </DocArticle>
      </DocChapter>

      <DocChapter number="5" name="課外活動">
        <DocArticle number="91" name="同好会">
          <DocParagraph number="1">
            本会は、会員により構成された団体を、準構成団体とし、同好会と称することができる。
          </DocParagraph>

          <DocParagraph number="2">
            同好会の一覧は、これを別に定め、総務課がこれを管理する。
          </DocParagraph>

          <DocParagraph number="3">
            <DocLink paragraph="51">第51条</DocLink>、<DocLink paragraph="52">第52条</DocLink>、<DocLink paragraph="53">第53条</DocLink>、<DocLink
              paragraph="54"
              >第54条</DocLink
            >、<DocLink paragraph="58">第58条</DocLink>および<DocLink paragraph="63">第63条</DocLink>の規定は、同好会について準用する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="92" name="同好会の要件">
          <DocParagraph number="1">
            同好会は、次に掲げる事項を全て満たさなければならない。
            <DocList type="漢数字">
              <DocListItem number="1">活動内容及びその目的が明確であること</DocListItem>
              <DocListItem number="2">活動内容が他のクラブ又は同好会と重複しないこと</DocListItem>
              <DocListItem number="3">3名以上の会員が所属していること</DocListItem>
              <DocListItem number="4">3つ以上の学級会に同好会員が所属していること</DocListItem>
            </DocList>
          </DocParagraph>
        </DocArticle>

        <DocArticle number="93" name="同好会の設立">
          <DocParagraph number="1">
            新たに同好会を設立しようとするときは、発起人5名以上を必要とし、その記名押印又は署名がなされた設立願を、総務課に提出しなければならない。<br />
            <DocLink article="92">第92条</DocLink>に掲げる要件を満たさない同好会の設立願は受理されない。
          </DocParagraph>

          <DocParagraph number="2">
            同好会は、総務課長の承認を経て、評議会がこれの設立を可決したときに、これが設立される。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="94">
          <DocParagraph number="1">
            総務課長は、同好会の設立を承認するとき、この設立を評議会に発議する。
          </DocParagraph>

          <DocParagraph number="2">
            会長は、評議会において同好会の設立が可決されたときは、その団体結成願を校長に提出しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="95" name="同好会の解散">
          <DocParagraph number="1">
            同好会は、総会又は評議会においてこれの解散が可決されたとき、これを解散しなければならない。<br />
            また、同好会は、このとき以外に、これを解散してはならない。
          </DocParagraph>

          <DocParagraph number="2">
            同好会は、次に掲げるときは、評議会に対しその解散が発議される。
            <DocList type="漢数字">
              <DocListItem number="1">活動停止期間が継続して1か年を超えたとき</DocListItem>
              <DocListItem number="2">5月1日時点で<DocLink article="93">第93条</DocLink>に掲げる要件を満たさないとき</DocListItem>
              <DocListItem number="3">
                <DocLink article="58" paragraph="1">第58条第1項</DocLink
                >に掲げる者により次に掲げる事項が指摘されてから、その事項の改善が認められないまま6か月が経過したとき
                <DocList type="イロハ">
                  <DocListItem number="1">6か月以上継続して、学校内における活動が認められないこと</DocListItem>
                  <DocListItem number="2">過去1か年以内に活動実績が認められないこと</DocListItem>
                </DocList>
              </DocListItem>
              <DocListItem number="4">同好会長が、総務課に対し、解散を願い出たとき</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="3">
            評議会においてクラブの解散が否決され、否決から起算して1か年が経過したとき、前項の事態が改善されていない場合は、再度クラブの解散が発議される。
          </DocParagraph>

          <DocParagraph number="4">
            <DocLink paragraph="2">第2項</DocLink>及び<DocLink paragraph="3">第3項</DocLink>に定める同好会の解散の発議は、総務課長がこれを行う。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="96" name="同好会の合併、分割及び名称変更">
          <DocParagraph number="1">
            同好会は、これを合併、分割又はその名称を変更するときは、これを総務課に願出なければならない。
          </DocParagraph>

          <DocParagraph number="2">
            同好会の合併、分割及びその名称の変更は、評議会がこれを可決したときに行う。
          </DocParagraph>

          <DocParagraph number="3">
            <DocLink article="61" paragraph="2">第61条第2項</DocLink>及び<DocLink article="61" paragraph="3">第3項</DocLink>並びに<DocLink
              article="62"
              paragraph="2"
              >第62条第2項</DocLink
            >及び<DocLink article="62" paragraph="3">第3項</DocLink>の規定は、同好会について準用する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="97" name="学生プロジェクト">
          <DocParagraph number="1">
            本会は、会員による自発的な活動を本会の活動とすることができ、これを学生プロジェクトと称する。
          </DocParagraph>

          <DocParagraph number="2">
            学生プロジェクトの一覧は、これを別に定め、総務課がこれを管理する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="98">
          <DocParagraph number="1">
            学生プロジェクトは、3名以上の会員個人による活動とする。
          </DocParagraph>

          <DocParagraph number="2">
            学生プロジェクトは、本会及び学校から、クラブ、同好会その他の本会の組織に準じた扱いを受けることができる。
          </DocParagraph>

          <DocParagraph number="3">
            学生プロジェクトは、その活動にあたって、執行部の指示に従わなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="99" name="学生プロジェクトの要件">
          <DocParagraph number="1">
            学生プロジェクトは、次に掲げる事項を全て満たさなければならない。
            <DocList type="漢数字">
              <DocListItem number="1">活動内容及びその目的が明確であること</DocListItem>
              <DocListItem number="2">活動内容が他のクラブ、同好会又は学生プロジェクトと重複しないこと</DocListItem>
              <DocListItem number="3">代表者を含む参加者が3名以上であること</DocListItem>
            </DocList>
          </DocParagraph>
        </DocArticle>

        <DocArticle number="100" name="学生プロジェクトの発足">
          <DocParagraph number="1">
            学生プロジェクトを発足するときは、代表者1名及び2名以上の参加者を必要とし、その記名押印又は署名がなされた発足願を、総務課に提出しなければならない。<br />
            <DocLink article="99">第99条</DocLink>に掲げる要件を満たさない学生プロジェクトの設立願は受理されない。
          </DocParagraph>

          <DocParagraph number="2">
            学生プロジェクトは、総務課長及び会長の承認により発足する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="101" name="学生プロジェクトの期間">
          <DocParagraph number="1">
            学生プロジェクトは、これの終了期日を発足以降最初の3月31日とする。
          </DocParagraph>

          <DocParagraph number="2">
            前項の規定に関わらず、学生プロジェクトは、1月1日から3月31日の間にこれの継続の届出があったとき、<DocLink paragraph="99">第99条</DocLink
            >に掲げる要件を満たす場合は、これの終了期日を翌年の3月31日に変更する。
          </DocParagraph>

          <DocParagraph number="3">
            継続の届出は、代表者1名及び代表者を除く参加者2名の記名押印又は署名を必要とする。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="102" name="学生プロジェクトの終了">
          <DocParagraph number="1">
            学生プロジェクトは、次に掲げる場合にその活動を終了し、本会の活動から除外される。
            <DocList type="漢数字">
              <DocListItem number="1">代表者により活動の終了が総務課に届出られたとき</DocListItem>
              <DocListItem number="2">総会若しくは評議会又は総務課長により活動の終了が命じられたとき</DocListItem>
              <DocListItem number="3">終了期日を満了したとき</DocListItem>
              <DocListItem number="4">代表者が会員でなくなったとき</DocListItem>
            </DocList>
          </DocParagraph>
        </DocArticle>

        <DocArticle number="103" name="学生プロジェクトの代表者の変更">
          <DocParagraph number="1">
            学生プロジェクトは、代表者を変更するとき、これを総務課に届出なければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="104" name="クラブと同好会">
          <DocParagraph number="1">
            クラブは、クラブの解散及び同好会の設立の手続きを経ることで、これの財産及び予算を維持した上でこれを同好会とすることができる。
          </DocParagraph>

          <DocParagraph number="2">
            同好会は、同好会の解散及びクラブの設立の手続きを経ることで、これの財産及び予算を維持した上でこれをクラブとすることができる。
          </DocParagraph>
        </DocArticle>
      </DocChapter>

      <DocChapter number="6" name="選挙">
        <DocArticle number="105" name="選挙">
          <DocParagraph number="1">
            本会は、以下に掲げる者を、選挙により選出する。
            <DocList type="漢数字">
              <DocListItem number="1"><DocLink article="7" paragraph="1">第7条第1項</DocLink>第一号及び第二号で定める役員</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="2">
            本会は、以下に掲げる者を、選挙により選出することができる。
            <DocList type="漢数字">
              <DocListItem number="1"><DocLink article="7" paragraph="1">第7条第1項</DocLink>第五号で定める役員</DocListItem>
              <DocListItem number="2">各執行機関の代表者</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="3">
            監査局の人事は、これを選挙により行うことはできない。
          </DocParagraph>

          <DocParagraph number="4">
            <DocLink paragraph="1">第1項</DocLink>第一号及び<DocLink paragraph="2">第2項</DocLink>第一号で定める選挙を役員選挙と呼称する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="106">
          <DocParagraph number="1">
            選挙を実施するときは、実施日から起算して14日以上前に、次に掲げる事項を公示しなければならない。
            <DocList type="漢数字">
              <DocListItem number="1">実施日時</DocListItem>
              <DocListItem number="2">実施場所</DocListItem>
              <DocListItem number="3">選出事項</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="2">
            立候補者は、実施日から起算して10日以上前に、立候補を監査局へ届出なければならない。
          </DocParagraph>

          <DocParagraph number="3">
            立候補者の一覧は、実施日から起算して5日以上前に、これを公示しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="107" name="選挙の運営">
          <DocParagraph number="1">
            選挙の準備及び運営は、監査局がこれを行う。
          </DocParagraph>

          <DocParagraph number="2">
            選挙の開票及び票数集計は、これを監査局員のみで行うこととし、監査局員以外がこれを行うことはできない。
          </DocParagraph>

          <DocParagraph number="3">
            監査局長を除く評議員は、選挙の開票及び票数集計を観覧し、監査することができる。<br />
            ただし、監査にあたっての指摘を除いて、これを妨害してはならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="108" name="投票">
          <DocParagraph number="1">
            監査局員を含む会員は、1名につき、1つの事項に対し単記の1票のみ投票することができる。
          </DocParagraph>

          <DocParagraph number="2">
            選挙は、各事項について最多得票者を、当選とする。
          </DocParagraph>

          <DocParagraph number="3">
            <DocLink paragraph="2">第2項</DocLink>の規定において、最多得票者が複数名あったときは、監査局長が決定権を有する。<br />
            ただし、最多得票者の何れかから選出するものとする。
          </DocParagraph>

          <DocParagraph number="4">
            投票方法は、監査局がこれを定める。<br />
            これに反するものは、これを無効票として扱う。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="109" name="信任投票">
          <DocParagraph number="1">
            立候補者数が議席数以下であるとき、各立候補者に対して信任投票を行う。
          </DocParagraph>

          <DocParagraph number="2">
            会員は、信任投票においては、同一事項の全ての立候補者に対して投票するものとする。
          </DocParagraph>

          <DocParagraph number="3">
            信任投票は、信任又は不信任の何れかとする。
          </DocParagraph>

          <DocParagraph number="4">
            立候補者は、信任票数が不信任票数を上回ったとき、これを当選とする。
          </DocParagraph>

          <DocParagraph number="5">
            <DocLink paragraph="4">第4項</DocLink>の規定において、信任票数と不信任票数が同数であったときは、監査局長が決定権を有する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="110" name="立候補者の不足">
          <DocParagraph number="1">
            立候補者が議席数を下回ったときは、会長により指名された者を、総会の承認により立候補者とみなす。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="111" name="選挙結果の公示">
          <DocParagraph number="1">
            選挙の結果は、実施日から起算して14日以内に、これを公示しなければならない。
          </DocParagraph>
        </DocArticle>
      </DocChapter>

      <DocChapter number="7" name="広報">
        <DocArticle number="112" name="広報">
          <DocParagraph number="1">
            本会は、本会内外にその活動を告知するため各種広報活動を行う。
          </DocParagraph>

          <DocParagraph number="2">
            本会は、次に掲げる広報活動を行う。
            <DocList type="漢数字">
              <DocListItem number="1">掲示物の掲出</DocListItem>
              <DocListItem number="2">機関紙及び機関誌の発行及び配布</DocListItem>
              <DocListItem number="3">校内放送の実施</DocListItem>
              <DocListItem number="4">Webサイトその他のインターネット上での情報掲載</DocListItem>
              <DocListItem number="5">その他情報公開に必要な活動</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="3">
            本会は、次に掲げる場合に本会外の個人又は団体に対し連絡及び交渉を行う。
            <DocList type="漢数字">
              <DocListItem number="1">本会活動への援助の募集</DocListItem>
              <DocListItem number="2">本会の対外向け行事の告知</DocListItem>
              <DocListItem number="3">その他対外向けの連絡又は交渉が必要なとき</DocListItem>
            </DocList>
          </DocParagraph>
        </DocArticle>

        <DocArticle number="113">
          <DocParagraph number="1">
            広報課は、本会の組織又は機関から委託されたとき、<DocLink paragraph="112">第112条</DocLink>に定める広報活動を代行する。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="114" name="公示">
          <DocParagraph number="1">
            本規約その他の本会で定める規定における公示は、学校内の学生掲示板への掲示を以て行う。
          </DocParagraph>

          <DocParagraph number="2">
            公示は、広報課、掲出希望者又は本規約で定められた機関若しくは組織がこれを行う。
          </DocParagraph>

          <DocParagraph number="3">
            公示するときは、公示期日から3日以上前に、その内容を広報課へ届出なければならない。<br />
            ただし、公示に即時性が求められる場合は、公示期日から起算して5日以内にこれを届出れば良い。
          </DocParagraph>
        </DocArticle>
      </DocChapter>

      <DocChapter number="8" name="雑則">
        <DocArticle number="115" name="活動計画">
          <DocParagraph number="1">
            本会は、毎年度、その年度の活動計画を作成しなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            年度は、毎年4月1日に始まり翌年3月31日に終わるものとする。
          </DocParagraph>

          <DocParagraph number="3">
            活動計画は、評議会及び総会による承認を必要とする。
          </DocParagraph>

          <DocParagraph number="4">
            活動計画は、総務課がこれを作成し、評議会に提出する。
          </DocParagraph>

          <DocParagraph number="5">
            活動計画は、総会による承認から起算して30日以内に、これを事業計画書として学校に提出しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="116" name="活動報告">
          <DocParagraph number="1">
            本会は、毎年度、前年度の活動について報告を行わなければならない。
          </DocParagraph>

          <DocParagraph number="2">
            活動報告は、評議会及び総会において、これを行わなければならない。
          </DocParagraph>

          <DocParagraph number="3">
            活動報告は、総務課がこれを行う。<br />
            ただし、各執行機関に対し、それぞれの活動報告を委任することができる。
          </DocParagraph>

          <DocParagraph number="4">
            活動報告は、年度の終了から90日以内にこれを行わなければならない。
          </DocParagraph>

          <DocParagraph number="5">
            活動報告は、総会における報告から起算して30日以内に、これを事業報告書として学校に提出しなければならない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="117" name="顧問">
          <DocParagraph number="1">
            以下に掲げるものは、学校の教員1名以上を指導教員として置かなければならない。<br />
            この指導教員を、顧問と呼称する。
            <DocList type="漢数字">
              <DocListItem number="1">執行部</DocListItem>
              <DocListItem number="2">委員会</DocListItem>
              <DocListItem number="3">部</DocListItem>
              <DocListItem number="4">クラブ</DocListItem>
              <DocListItem number="5">監査局</DocListItem>
              <DocListItem number="6">同好会</DocListItem>
              <DocListItem number="7">学生プロジェクト</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="2">
            顧問は、その活動の指導に当たる。<br />
            ただし、顧問は、会議の議決に参加することはできない。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="118" name="規約の改正">
          <DocParagraph number="1">
            本規約の改正は、次に掲げる場合に、会長がこれを総会において発議する。<br />
            改正案は、これを要求したものが、会長にこれを提出する。
            <DocList type="漢数字">
              <DocListItem number="1">評議会において規約改正の発議が可決されたとき</DocListItem>
              <DocListItem number="2">会員の過半数から要求があったとき</DocListItem>
            </DocList>
          </DocParagraph>

          <DocParagraph number="2">
            本規約の改正は、総会においてこれを議決する。
          </DocParagraph>

          <DocParagraph number="3">
            <DocLink article="71" paragraph="3">第71条第3項</DocLink>、<DocLink article="71" paragraph="4">第4項</DocLink>及び<DocLink
              article="71"
              paragraph="5"
              >第5項</DocLink
            >の規定に関わらず、本規約の改正には全会員の過半数の賛成を必要とする。<br />
            賛成票数がこれに満たないときは、保留票数が反対票数を上回ったときにこれを保留とし、反対票数が保留票数を上回ったときにこれを否決とする。
          </DocParagraph>
        </DocArticle>

        <DocArticle number="119" name="細則">
          <DocParagraph number="1">
            本会は、本規約に付随する規定として細則を定める事ができる。
          </DocParagraph>

          <DocParagraph number="2">
            細則の制定及び改廃は、評議会又は総会においてこれを議決する。
          </DocParagraph>

          <DocParagraph number="3">
            <DocLink article="71" paragraph="3">第71条第3項</DocLink>、<DocLink article="71" paragraph="4">第4項</DocLink>及び<DocLink
              article="71"
              paragraph="5"
              >第5項</DocLink
            >の規定に関わらず、細則の制定及び改廃には全構成員の過半数の賛成を必要とする。<br />
            賛成票数がこれに満たないときは、保留票数が反対票数を上回ったときにこれを保留とし、反対票数が保留票数を上回ったときにこれを否決とする。
          </DocParagraph>
        </DocArticle>
      </DocChapter>

      <DocSP>
        <DocSPArticle number="1">
          <DocSPParagraph number="1">
            この規約は、2020年4月1日から施行する。
          </DocSPParagraph>
        </DocSPArticle>

        <DocSPArticle number="2">
          <DocSPParagraph number="1">
            2020年3月31日時点で定める学生会細則は、本規約の施行を以てこれを廃止する。
          </DocSPParagraph>
        </DocSPArticle>

        <DocSPArticle number="3">
          <DocSPParagraph number="1">
            会計年度における2020年度は、2020年4月1日から2021年2月28日までとする。
          </DocSPParagraph>
        </DocSPArticle>

        <DocSPArticle number="4">
          <DocSPParagraph number="1">
            <DocLink article="7">第7条</DocLink>第一号の役員は、2020年3月31日時点で会長を担う者が、2020年9月30日まで継続してこれを担う。
          </DocSPParagraph>

          <DocSPParagraph number="2">
            <DocLink article="7">第7条</DocLink>第二号の役員は、2020年3月31日時点で副会長を担う者の何れか1名が、2020年9月30日まで継続してこれを担う。
          </DocSPParagraph>

          <DocSPParagraph number="3">
            <DocLink article="7">第7条</DocLink>第三号の役員は、2020年4月1日から2020年4月30日までの期間に会長がこれを任命する。<br />
            その任期は、2020年4月1日から2020年9月30日までとする。
          </DocSPParagraph>

          <DocSPParagraph number="4">
            <DocLink article="7">第7条</DocLink>第四号の役員は、2020年4月1日から2020年4月30日までの期間に会長がこれを任命する。<br />
            その任期は、2020年4月1日から2020年9月30日までとする。
          </DocSPParagraph>
        </DocSPArticle>
      </DocSP>
    </Doc>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Doc from "@/components/Doc.vue";
import DocArticle from "@/components/DocArticle.vue";
import DocChapter from "@/components/DocChapter.vue";
import DocLink from "@/components/DocLink.vue";
import DocList from "@/components/DocList.vue";
import DocListItem from "@/components/DocListItem.vue";
import DocNote from "@/components/DocNote.vue";
import DocParagraph from "@/components/DocParagraph.vue";
import DocSection from "@/components/DocSection.vue";
import DocSP from "@/components/DocSP.vue";
import DocSPArticle from "@/components/DocSPArticle.vue";
import DocSPParagraph from "@/components/DocSPParagraph.vue";
import DocTitle from "@/components/DocTitle.vue";

@Component({
  components: {
    Doc,
    DocArticle,
    DocChapter,
    DocLink,
    DocList,
    DocListItem,
    DocNote,
    DocParagraph,
    DocSection,
    DocSP,
    DocSPArticle,
    DocSPParagraph,
    DocTitle
  }
})
export default class App extends Vue {}
</script>
