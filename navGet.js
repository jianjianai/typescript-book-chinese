(() => {
    const r = [];
    document.querySelectorAll(".sidebar-group").forEach((grep) => {
        const title = grep.querySelector("p.sidebar-heading").innerText;
        const list = [];
        grep.querySelectorAll('ul.sidebar-group-items > li > a').forEach((a) => {
            list.push({
                "link": a.href,
                "title": a.innerText
            })
        })
        r.push({
            "title": title,
            "items": list
        });
    });
    console.log(JSON.stringify(r));
})()