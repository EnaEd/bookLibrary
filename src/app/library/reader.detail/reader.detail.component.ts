import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Reader } from 'src/app/models/reader';
import { ReaderRepository } from 'src/app/repositories/reader.repository';

@Component({
    selector: "readerDetail",
    templateUrl: "reader.detail.component.html"
})
export class ReaderDetailComponent implements OnInit {

    private reader: Reader;
    private readerId: number;
    private readerRepository: ReaderRepository;

    constructor(private route: ActivatedRoute, private repository: ReaderRepository) {
        this.readerRepository = repository;
    }
    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap(param => param.get('id'))
        ).subscribe(data => {
            this.readerId = +data;//+ means interpret to number
            this.reader = this.readerRepository.getReader(this.readerId);

        });
    }



    get ReaderName() {
        return this.reader.name;
    }
    get ReaderBooks() {
        return this.readerRepository.getBooksInHand(this.reader);
    }

}