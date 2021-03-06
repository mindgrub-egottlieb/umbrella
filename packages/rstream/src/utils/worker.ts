export const inlineWorker =
    (src: string) =>
        makeWorker(new Blob([src], { type: "text/javascript" }));

export const makeWorker =
    (worker: Worker | string | Blob) =>
        worker instanceof Worker ?
            worker :
            new Worker(
                worker instanceof Blob ?
                    URL.createObjectURL(worker) :
                    worker
            );
