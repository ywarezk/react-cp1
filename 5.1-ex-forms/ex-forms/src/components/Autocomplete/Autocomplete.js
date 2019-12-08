/**
 * component displays search box and a list
 * when we type we filter the list according to the search
 */

import React, {useState, useRef, useEffect} from 'react';
import {fromEvent} from 'rxjs';
import {map, debounceTime, distinctUntilChanged} from 'rxjs/operators';

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

let longList = [];

for(let i=0; i<10000; i++) {
    longList.push(makeid(10));
}

export default () => {
    const [longListState, setLongList] = useState(longList);

    const searchInputRef = useRef(null);

    useEffect(() => {

        fromEvent(searchInputRef.current, 'input').pipe(
            map((event) => event.target.value),
            debounceTime(1000),
            distinctUntilChanged()
        )
        .subscribe((searchString) => {
            console.log(searchString);

            const newFilteredArray = longList.filter((singleItem) => {
                return singleItem.toLowerCase().indexOf(searchString) !== -1;
            });
    
            setLongList(newFilteredArray);
        });

    }, [])

    const handleChange = (event) => {
        const searchString = event.target.value;

        const newFilteredArray = longList.filter((singleItem) => {
            return singleItem.toLowerCase().indexOf(searchString) !== -1;
        });

        setLongList(newFilteredArray);
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Search</label>
                    <input
                        ref={searchInputRef} 
                        
                        type="search" name="search" className="form-control" />
                </div>
            </form>

            <ul>
                {
                    longListState.map((singleItem, index) => 
                        <li key={index}>{singleItem}</li>
                    )
                }
            </ul>
        </div>
        
    )
}