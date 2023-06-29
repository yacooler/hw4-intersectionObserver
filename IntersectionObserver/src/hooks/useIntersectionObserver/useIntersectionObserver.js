import { useEffect, useState } from "react";
import { useRef } from "react";

export default function useIntersectionObserver(targetObservebleObjectReference, targetRootMargin = "0px", intersectOnce = false){
    const INTERSECTION_RATIO_FOR_INTERSECTION_ONCE = 0.9;
    const options =  {
        root: null,
        rootMargin: targetRootMargin,
        threshold: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]}

    //Создали постоянную ссылку на observer, которая не будет меняться при перевызове хука
    const observer = useRef(new IntersectionObserver(
        onObserve,
        options));
    
    const hasBeenIntersectedOnce = useRef(false);

    //Добавляем объект, за которым планируем наблюдать
    useEffect(()=>
        observer.current.observe(targetObservebleObjectReference.current),
        [targetObservebleObjectReference]);

    const [observableEvent, setObservableEvent] = useState(null)
   
    function onObserve(eventTargets){


        //Если уже отработали события, которые надо было отработать разово - выходим
        if (hasBeenIntersectedOnce.current) return;

        //Если события надо отработать разово и мы пересекли границу трешхолда = считаем, что всё отработали и больше не надо
        //Больше мы в этот блок не попадём.
        if (intersectOnce && eventTargets[0]?.intersectionRatio >= INTERSECTION_RATIO_FOR_INTERSECTION_ONCE) {
            
            hasBeenIntersectedOnce.current = true;
            setObservableEvent(null);
        }

        setObservableEvent(eventTargets);
    }

    return observableEvent;


}