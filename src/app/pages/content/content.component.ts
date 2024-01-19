import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
    image: string = ""
  @Input()
    title: string = ""
  @Input()
    description: String = ""

  private id: string | null = "0"


  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.title = result.title
    this.description = result.description
    this.image = result.photo
  }
}
