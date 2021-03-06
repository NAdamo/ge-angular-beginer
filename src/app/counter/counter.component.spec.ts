import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CounterComponent} from './counter.component';
import {enableProdMode} from '@angular/core';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize a counter', () => {
    expect(component.counter).not.toBeUndefined();
  });

  it('should display counters value', () => {
    component.counter = 12;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('div'));
    expect(de.nativeElement.innerText).toContain(12);
  });

  it('should increment counters value when increase invoked', () => {
    component.counter = 100;
    component.increase();
    expect(component.counter).toBe(101);
  });

  function clickButton(which: number) {
    const button = fixture.debugElement.queryAll(By.css('button'))[which];
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
  }

  it('should increment counters value when increase button clicked', () => {
    component.counter = 100;
    fixture.detectChanges();
    clickButton(1)
    expect(component.counter).toBe(101);
  });

  it('should send a counterClicked event with the actual value, when the increase button is clicked', async((done) => {
    let lastEvent = 0;
    component.counterClick.subscribe(event => lastEvent = event);
    component.counter = 100;
    fixture.detectChanges();
    clickButton(1);
    expect(lastEvent).toBe(101);
  }));
});
